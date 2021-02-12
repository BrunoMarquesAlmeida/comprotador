import React from "react";
import { connect } from "react-redux";

import BreadCrumb from "./BreadCrumb";
import MenuFilters from "./MenuFilters";
import ProductList from "./ProductList";
import NavMenu from "../Detail/NavMenu";

import { fetchAllProducts } from "../../actions";
import { db } from "../../produtos";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      specFiltersSelected: [],
      activePage: 1,
      showN: 12,
      ordenarPor: "vendas",
    };
  }

  handleSelectChange = ({ target }) => {
    this.setState({ ordenarPor: target.value, activePage: 1 });
  };

  showBtnClick = (n) => {
    this.setState({ showN: n, activePage: 1 });
  };

  pageBtnClick = (i, numberOfPages) => {
    const next = this.state.activePage + 1;
    const prev = this.state.activePage - 1;

    if (i === "»" && next <= numberOfPages) {
      this.setState({ activePage: next });
      return;
    }
    if (i === "«" && prev >= 1) {
      this.setState({ activePage: prev });
      return;
    }
    this.setState({ activePage: i });
  };

  onRemoveFiltersClick = () => {
    this.setState({ specFiltersSelected: [], activePage: 1 });
  };

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

  componentDidMount() {
    this.props.fetchAllProducts();
  }

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
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const allProducts = Object.values(state.products);
  const { categoria, subCategoria, subCategoria2 } = ownProps.match.params;
  return {
    productsByCat: allProducts.filter((produto) => {
      const isNotFetchComplete =
        typeof produto === "object" && produto !== null;
      if (isNotFetchComplete) {
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

export default connect(mapStateToProps, { fetchAllProducts })(Category);
