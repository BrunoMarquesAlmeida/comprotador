import React from "react";
import { connect } from "react-redux";

import BreadCrumb from "./BreadCrumb";
import MenuFilters from "./MenuFilters";
import ProductList from "./ProductList";
import NavMenu from "../Detail/NavMenu";

import { fetchAllProducts, addToCart } from "../../actions";
import { db } from "../../produtos";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // what specs are selected for filtering
      specFiltersSelected: [],

      // what page in the product list the user is on
      activePage: 1,

      // how many products are displayed in the product list
      showN: 12,

      // how the product list is sorted
      ordenarPor: "vendas",
    };
  }

  // fetches all products in DB
  componentDidMount() {
    this.props.fetchAllProducts();
  }

  // handle sorting method chages
  handleSelectChange = ({ target }) => {
    this.setState({ ordenarPor: target.value, activePage: 1 });
  };

  // sets showN to selected number
  showBtnClick = (n) => {
    this.setState({ showN: n, activePage: 1 });
  };

  // handles page button clicks
  pageBtnClick = (i, numberOfPages) => {
    const next = this.state.activePage + 1;
    const prev = this.state.activePage - 1;
    const userClickedNext = i === "»";
    const userClickedPrev = i === "«";

    if (userClickedNext) {
      this.setState({ activePage: next });
      return;
    }
    if (userClickedPrev) {
      this.setState({ activePage: prev });
      return;
    }

    // user clicked number of page
    this.setState({ activePage: i });
  };

  // user clicked 'remove all filters' button
  onRemoveFiltersClick = () => {
    this.setState({ specFiltersSelected: [], activePage: 1 });
  };

  // user clicked on Filters Menu checkbox
  onFilterClick = (c) => {
    const { specFiltersSelected } = this.state;
    if (specFiltersSelected.includes(c)) {
      const index = specFiltersSelected.indexOf(c);
      const newFilter = [...specFiltersSelected];
      newFilter.splice(index, 1);
      this.setState({ specFiltersSelected: newFilter, activePage: 1 });
    } else {
      this.setState({
        specFiltersSelected: [...specFiltersSelected, c],
        activePage: 1,
      });
    }
  };

  // if (no subCategory is selected or no products are available) { we render a NavMenu } else { we render the FilterMenu}
  renderSideBar() {
    const { subCategoria } = this.props.match.params;
    const noResults = this.props.productsByCat.length === 0;

    if (subCategoria === undefined || noResults) {
      return <NavMenu />;
    }
    return (
      <MenuFilters
        productsByCat={this.props.productsByCat}
        categorias={this.props.match.params}
        isFiltersSelected={this.state.specFiltersSelected.length > 0}
        specFiltersSelected={this.state.specFiltersSelected}
        onFilterClick={this.onFilterClick}
        onRemoveFiltersClick={this.onRemoveFiltersClick}
      />
    );
  }

  render() {
    return (
      <div id="content">
        <div className="container">
          <div className="row">
            <BreadCrumb params={this.props.match.params} />
            {this.renderSideBar()}
            <ProductList
              specFiltersSelected={this.state.specFiltersSelected}
              categorias={this.props.match.params}
              productsByCat={this.props.productsByCat}
              fetchComplete={this.props.fetchComplete}
              pageBtnClick={this.pageBtnClick}
              activePage={this.state.activePage}
              showBtnClick={this.showBtnClick}
              showN={this.state.showN}
              handleSelectChange={this.handleSelectChange}
              ordenarPor={this.state.ordenarPor}
              addToCart={this.props.addToCart}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // const allProducts = db.produtos;
  // local DB for testing purposes

  const allProducts = Object.values(state.products);
  const { categoria, subCategoria, subCategoria2 } = ownProps.match.params;

  return {
    productsByCat: allProducts.filter((produto) => {
      // first we filter out the fetchComplete
      const isNotFetchComplete =
        typeof produto === "object" && produto !== null;

      if (isNotFetchComplete) {
        // then we filter products based on what categories the user navigated to
        const { categorias } = produto;
        if (subCategoria2) {
          return (
            categorias.subCategoria2 === subCategoria2 &&
            categorias.subCategoria === subCategoria &&
            categorias.categoria === categoria
          );
        } else if (subCategoria) {
          return (
            categorias.subCategoria === subCategoria &&
            categorias.categoria === categoria
          );
        }
        return categorias.categoria === categoria;
      }
    }),
    fetchComplete: state.products.fetchComplete,
  };
};

export default connect(mapStateToProps, { fetchAllProducts, addToCart })(
  Category
);
