import React from "react";
import { connect } from "react-redux";

import BreadCrumb from "./BreadCrumb";
import ProductList from "./ProductList";
import NavMenu from "../Detail/NavMenu";

import { fetchAllProducts, addToCart } from "../../actions";

import { db } from "../../produtos";

class Procura extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    return (
      <div id="content">
        <div className="container">
          <div className="row">
            <BreadCrumb params={this.props.match.params} />
            <NavMenu />
            <ProductList
              params={this.props.match.params}
              productsByCat={this.props.productsByCat}
              fetchComplete={this.props.fetchComplete}
              pageBtnClick={this.pageBtnClick}
              activePage={this.state.activePage}
              showBtnClick={this.showBtnClick}
              showN={this.state.showN}
              specFiltersSelected={[]}
              ordenarPor={this.state.ordenarPor}
              handleSelectChange={this.handleSelectChange}
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
  const searchTerm = ownProps.match.params.searchTerm.toLowerCase();

  return {
    productsByCat: allProducts.filter((produto) => {
      // first we filter out the fetchComplete
      const isNotFetchComplete =
        typeof produto === "object" && produto !== null;

      if (isNotFetchComplete) {
        const { title, categorias } = produto;

        // if(user searches for 'todos'){return all the products}
        if (searchTerm === "todos") {
          return true;
        }

        // if search term is included in the title of this product return it
        const title_Includes_SearchTerm = title
          .toLowerCase()
          .includes(searchTerm);

        if (title_Includes_SearchTerm) {
          return true;
        }

        // if search term is included in the categories of this product return it
        const categoria_Includes_SearchTerm = categorias.categoria
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const subCategoria_Includes_SearchTerm = categorias.subCategoria
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const subCategoria2_Includes_SearchTerm =
          categorias.subCategoria2 &&
          categorias.subCategoria2
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        if (categoria_Includes_SearchTerm) {
          return true;
        }

        if (subCategoria_Includes_SearchTerm) {
          return true;
        }

        if (subCategoria2_Includes_SearchTerm) {
          return true;
        }
      }
    }),
    fetchComplete: state.products.fetchComplete,
  };
};

export default connect(mapStateToProps, { fetchAllProducts, addToCart })(
  Procura
);
