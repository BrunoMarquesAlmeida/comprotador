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
    };
  }

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

    if (subCategoria !== undefined) {
      return (
        <MenuFilters
          productsByCat={this.props.productsByCat}
          categorias={this.props.match.params}
          specFiltersSelected={this.state.specFiltersSelected}
          onFilterClick={this.onFilterClick}
        />
      );
    }
    return <NavMenu />;
  }

  render() {
    return (
      <div id="content">
        <div className="container">
          <div className="row">
            <BreadCrumb categorias={this.props.match.params} />

            {this.renderSideBar()}
            <ProductList
              specFiltersSelected={this.state.specFiltersSelected}
              categorias={this.props.match.params}
              productsByCat={this.props.productsByCat}
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
    productsByCat: db.produtos.filter(({ categorias }) => {
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
    }),
  };
};

export default connect(mapStateToProps, { fetchAllProducts })(Category);
