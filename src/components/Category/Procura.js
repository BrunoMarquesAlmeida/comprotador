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
    };
  }

  onRemoveFiltersClick = () => {
    this.setState({ specFiltersSelected: [] });
  };

  onFilterClick = (c) => {
    const { specFiltersSelected } = this.state;
    if (specFiltersSelected.includes(c)) {
      const index = specFiltersSelected.indexOf(c);
      const newFilter = [...specFiltersSelected];
      newFilter.splice(index, 1);
      this.setState({ specFiltersSelected: newFilter });
    } else {
      this.setState({ specFiltersSelected: [...specFiltersSelected, c] });
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
              params={this.props.match.params}
              productsByCat={this.props.productsByCat}
              fetchComplete={this.props.fetchComplete}
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
