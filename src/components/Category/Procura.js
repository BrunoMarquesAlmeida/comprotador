import React from "react";
import { connect } from "react-redux";

import BreadCrumb from "./BreadCrumb";
import MenuFilters from "./MenuFilters";
import ProductList from "./ProductList";
import NavMenu from "../Detail/NavMenu";

import { fetchAllProducts } from "../../actions";

import { db } from "../../produtos";

class Procura extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      specFiltersSelected: [],
      activePage: 1,
      showN: 12,
    };
  }

  componentDidMount() {
    this.props.fetchAllProducts();
  }

  render() {
    return (
      <div id="content">
        <div className="container">
          <div className="row">
            <BreadCrumb params={this.props.match.params} />
            <NavMenu />
            <ProductList
              specFiltersSelected={this.state.specFiltersSelected}
              params={this.props.match.params}
              productsByCat={this.props.productsByCat}
              fetchComplete={this.props.fetchComplete}
              pageBtnClick={this.pageBtnClick}
              activePage={this.state.activePage}
              showBtnClick={this.showBtnClick}
              showN={this.state.showN}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const allProducts = Object.values(state.products);
  const searchTerm = ownProps.match.params.searchTerm.toLowerCase();
  return {
    productsByCat: allProducts.filter((produto) => {
      const isNotFetchComplete =
        typeof produto === "object" && produto !== null;
      if (isNotFetchComplete) {
        const { title, categorias } = produto;

        if (searchTerm === "todos") {
          return true;
        }

        const title_Includes_SearchTerm = title
          .toLowerCase()
          .includes(searchTerm);
        if (title_Includes_SearchTerm) {
          return true;
        }

        const categoria_Includes_SearchTerm = categorias.categoria
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        if (categoria_Includes_SearchTerm) {
          return true;
        }

        const subCategoria_Includes_SearchTerm = categorias.subCategoria
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        if (subCategoria_Includes_SearchTerm) {
          return true;
        }

        const subCategoria2_Includes_SearchTerm =
          categorias.subCategoria2 &&
          categorias.subCategoria2
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        if (subCategoria2_Includes_SearchTerm) {
          return true;
        }
      }
    }),
    fetchComplete: state.products.fetchComplete,
  };
};

export default connect(mapStateToProps, { fetchAllProducts })(Procura);
