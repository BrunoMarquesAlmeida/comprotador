import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";

import { NewRibbon } from "../Common/Ribbon";
import { AddCartIcon } from "../Common/AddCartIcon";

import { fetchAllProducts } from "../../actions";

class ProductList extends React.Component {
  componentDidMount() {
    this.props.fetchAllProducts();
  }

  render() {
    return (
      <div className="col-lg-9">
        <div className="box titleBox">
          <h1>{renderTitleBox(this.props)}</h1>
        </div>
        <div className="box info-bar">
          <div className="row">
            <div className="col-md-12 col-lg-4 products-showing">
              Mostrando <strong>12</strong> de <strong>25</strong> produtos
            </div>
            <div className="col-md-12 col-lg-7 products-number-sort">
              <form className="form-inline d-block d-lg-flex justify-content-between flex-column flex-md-row">
                <div className="products-number">
                  <strong>Mostrar</strong>
                  <span className="btn btn-sm btn-primary">12</span>
                  <span href="#" className="btn btn-outline-secondary btn-sm">
                    24
                  </span>
                  <span href="#" className="btn btn-outline-secondary btn-sm">
                    All
                  </span>
                  <span>produtos</span>
                </div>
                <div className="products-sort-by mt-2 mt-lg-0">
                  <strong>Ordenar por</strong>
                  <select name="sort-by" className="form-control">
                    <option>Preço</option>
                    <option>Nome</option>
                    <option>Vendas</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row products">
          {this.props.filteredProducts.map((product) =>
            renderProductList(product)
          )}
        </div>
        <div className="pages">
          <p className="loadMore">
            <span className="btn btn-primary btn-lg">
              <i className="fa fa-chevron-down"></i> Load more
            </span>
          </p>
          <nav
            aria-label="Page navigation example"
            className="d-flex justify-content-center"
          >
            <ul className="pagination">
              <li className="page-item">
                <span aria-label="Previous" className="page-link">
                  <span aria-hidden="true">«</span>
                  <span className="sr-only">Previous</span>
                </span>
              </li>
              <li className="page-item active">
                <span aria-label="Previous" className="page-link">
                  1
                </span>
              </li>
              <li className="page-item">
                <span aria-label="Previous" className="page-link">
                  2
                </span>
              </li>
              <li className="page-item">
                <span aria-label="Previous" className="page-link">
                  3
                </span>
              </li>
              <li className="page-item">
                <span aria-label="Previous" className="page-link">
                  4
                </span>
              </li>
              <li className="page-item">
                <span aria-label="Previous" className="page-link">
                  5
                </span>
              </li>
              <li className="page-item">
                <span aria-label="Previous" className="page-link">
                  <span aria-hidden="true">»</span>
                  <span className="sr-only">Next</span>
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

const renderTitleBox = (props) => {
  const { categoria, subCategoria } = props.categorias;

  if (subCategoria) {
    return subCategoria;
  }
  return categoria;
};

const renderProductList = (product) => {
  const { id, title, img, precos, ribbons } = product;
  return (
    <div className="col-lg-4 col-md-6" key={id}>
      <div className="product">
        <Link to={`/detalhes/${id}`}>
          <img
            src={`assets/img/produtos/${img}`}
            alt=""
            className="img-fluid"
          />
        </Link>
        <div className="text">
          <h3>
            <Link to={`/detalhes/${id}`}>{title}</Link>
          </h3>
          <p className="price">
            {precos.desconto ? (
              <>
                <del>{precos.normal}</del> {precos.desconto}{" "}
              </>
            ) : (
              <>{precos.normal}</>
            )}
          </p>
          <p className="buttons">
            <Link to={`/detalhes/${id}`} className="btn btn-outline-secondary">
              Ver detalhes
            </Link>
            <AddCartIcon />
          </p>
        </div>
        {ribbons.novo ? <NewRibbon tipo="novo" /> : null}
        {ribbons.saldos ? <NewRibbon tipo="saldos" /> : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const allProducts = Object.values(state.products);
  const { categoria, subCategoria, subCategoria2 } = ownProps.categorias;
  return {
    filteredProducts: allProducts.filter(({ categorias }) => {
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

export default connect(mapStateToProps, { fetchAllProducts })(ProductList);
