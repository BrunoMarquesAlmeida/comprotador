import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchAllProducts } from "../../actions";
import formatPrice from "../Common/formatPrice";

class Recomendados extends React.Component {
  componentDidMount() {
    this.props.fetchAllProducts();
  }

  renderProducts() {
    // sorts products by sales number
    const sortedProducts = this.props.products.sort((a, b) => {
      if (a.vendas < b.vendas) {
        return 1;
      }
      if (a.vendas > b.vendas) {
        return -1;
      }
      return 0;
    });

    // slices the 3 most sold products
    const hotProducts = sortedProducts.slice(0, 3);

    // maps those 3 products onto JSX
    return hotProducts.map(({ img, title, id, precos }) => {
      return (
        <div className="col-md-3 col-sm-6" key={id}>
          <div className="product">
            <Link to={`/detalhes/${id}`}>
              <img src={img[0].original} alt="" className="img-fluid" />
            </Link>
            <div className="text">
              <h3>{title}</h3>
              <p className="price">
                <del>{precos.desconto ? formatPrice(precos.normal) : null}</del>
                <> </>
                {precos.desconto
                  ? formatPrice(precos.desconto)
                  : formatPrice(precos.normal)}
              </p>
            </div>
          </div>
        </div>
      );
    });
  }

  // hosts enclosing JSX
  render() {
    return (
      <div className="row same-height-row">
        <div className="col-md-3 col-sm-6" style={{ display: "grid" }}>
          <div className="box">
            <h3>Produtos recomendados</h3>
          </div>
        </div>
        {this.renderProducts()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const allProducts = Object.values(state.products);

  return {
    // filter out fetchComplete
    products: allProducts.filter((produto) => {
      const isNotFetchComplete =
        typeof produto === "object" && produto !== null;
      return isNotFetchComplete;
    }),
    fetchComplete: state.products.fetchComplete,
  };
};

export default connect(mapStateToProps, { fetchAllProducts })(Recomendados);
