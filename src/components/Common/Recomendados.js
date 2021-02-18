import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchAllProducts } from "../../actions";

class Recomendados extends React.Component {
  componentDidMount() {
    this.props.fetchAllProducts();
  }

  renderProducts() {
    const sortedProducts = this.props.products.sort((a, b) => {
      if (a.vendas < b.vendas) {
        return 1;
      }
      if (a.vendas > b.vendas) {
        return -1;
      }
      return 0;
    });

    const hotProducts = sortedProducts.slice(0, 3);

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
                <del>{precos.desconto ? precos.normal : null}</del>
                <> </>
                {precos.desconto ? precos.desconto : precos.normal}
              </p>
            </div>
          </div>
        </div>
      );
    });
  }

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
    products: allProducts.filter((produto) => {
      const isNotFetchComplete =
        typeof produto === "object" && produto !== null;
      return isNotFetchComplete;
    }),
    fetchComplete: state.products.fetchComplete,
  };
};

export default connect(mapStateToProps, { fetchAllProducts })(Recomendados);
