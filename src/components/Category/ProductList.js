import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";
import _ from "lodash";

import { Spinner } from "react-bootstrap";

import { NewRibbon } from "../Common/Ribbon";
import { AddCartIcon } from "../Common/AddCartIcon";

import { fetchAllProducts } from "../../actions";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pages: 1, showN: 12, activePage: 1, ordenarPor: "vendas" };
  }

  componentDidMount() {
    this.props.fetchAllProducts();
  }

  renderProductList = (showNProducts) => {
    const buildProductListJSX = (product) => {
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
                    <del>
                      {precos.normal.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ")}
                      {" €"}
                    </del>{" "}
                    {precos.desconto}
                    {" €"}
                  </>
                ) : (
                  <>
                    {precos.normal.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ")} €
                  </>
                )}
              </p>
              <p className="buttons">
                <Link
                  to={`/detalhes/${id}`}
                  className="btn btn-outline-secondary"
                >
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

    if (!this.props.productsByCat[0]) {
      return (
        <div className="container mb-4">
          <div className="row justify-content-center">
            <Spinner animation="border" role="status" variant="info">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        </div>
      );
    }

    if (this.state.showN === "all") {
      return this.props.productsByCat.map((product) =>
        buildProductListJSX(product)
      );
    }

    return showNProducts.map((product) => buildProductListJSX(product));
  };

  pageBtnClick(i, numberOfPages) {
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
  }

  showBtnClick = (n) => {
    this.setState({ showN: n });
    this.setState({ activePage: 1 });
  };

  showBtnClassName = (n) => {
    return this.state.showN === n
      ? "btn btn-sm btn-primary"
      : "btn btn-outline-secondary btn-sm";
  };

  renderPageList = () => {
    const { activePage } = this.state;
    const numberOfPages = Math.ceil(
      this.props.productsByCat.length / this.state.showN
    );
    const pageNeighbours = 2;
    const totalNumbers = pageNeighbours * 2 + 2;
    const totalBlocks = totalNumbers;

    const fetchPageNumbers = () => {
      if (numberOfPages > totalBlocks) {
        const startPage = Math.max(2, activePage - pageNeighbours);
        const endPage = Math.min(
          numberOfPages - 1,
          activePage + pageNeighbours
        );
        let pages = _.range(startPage, endPage + 1);

        const hasLeftSpill = startPage > 2;
        const hasRightSpill = numberOfPages - endPage > 1;
        const spillOffset = totalNumbers - pages.length;

        switch (true) {
          case hasLeftSpill && !hasRightSpill: {
            const extraPages = _.range(startPage - spillOffset, startPage);
            pages = ["«", ...extraPages, ...pages];
            break;
          }
          case !hasLeftSpill && hasRightSpill: {
            const extraPages = _.range(endPage + 1, endPage + spillOffset + 1);
            pages = [...pages, ...extraPages, "»"];
            break;
          }
          case hasLeftSpill && hasRightSpill: {
            pages = ["«", ...pages, "»"];
            break;
          }
          default: {
            break;
          }
        }
        return [1, ...pages, numberOfPages];
      }
      return _.range(1, numberOfPages + 1);
    };

    const pages = fetchPageNumbers();

    const mapPages = () =>
      pages.map((i) => {
        return (
          <li
            className={activePage === i ? "page-item active" : "page-item"}
            onClick={(e) => this.pageBtnClick(i, numberOfPages)}
            key={i}
            style={{ cursor: "pointer" }}
          >
            <span aria-label="Previous" className="page-link">
              {i}
            </span>
          </li>
        );
      });

    return mapPages();
  };

  handleSelectChange = ({ target }) => {
    this.setState({ ordenarPor: target.value });
  };

  render() {
    const { productsByCat } = this.props;

    const orderedProducts = productsByCat.sort((a, b) => {
      if (this.state.ordenarPor === "priceAsc") {
        if (parseFloat(a.precos.normal) > parseFloat(b.precos.normal)) {
          return 1;
        }
        if (parseFloat(a.precos.normal) < parseFloat(b.precos.normal)) {
          return -1;
        }
        return 0;
      }
      if (this.state.ordenarPor === "priceDesc") {
        if (parseFloat(a.precos.normal) < parseFloat(b.precos.normal)) {
          return 1;
        }
        if (parseFloat(a.precos.normal) > parseFloat(b.precos.normal)) {
          return -1;
        }
        return 0;
      }
      if (this.state.ordenarPor === "AZ") {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        return 0;
      }
      if (this.state.ordenarPor === "ZA") {
        if (a.title < b.title) {
          return 1;
        }
        if (a.title > b.title) {
          return -1;
        }
        return 0;
      }
      return null;
    });

    const startingProduct =
      this.state.activePage * this.state.showN - this.state.showN;

    const showNProducts = orderedProducts.slice(
      startingProduct,
      this.state.showN * this.state.activePage
    );

    return (
      <div className="col-lg-9">
        <div className="box titleBox">
          <h1>{renderTitleBox(this.props)}</h1>
        </div>
        <div className="box info-bar">
          <div className="row">
            <div className="col-md-12 col-lg-4 products-showing">
              Mostrando{" "}
              <strong>
                {this.state.showN === "all"
                  ? productsByCat.length
                  : showNProducts.length}
              </strong>{" "}
              de <strong>{productsByCat.length}</strong> produtos
            </div>
            <div className="col-md-12 col-lg-7 products-number-sort">
              <form className="form-inline d-block d-lg-flex justify-content-between flex-column flex-md-row">
                <div className="products-number">
                  <strong>Mostrar</strong>
                  <span
                    className={this.showBtnClassName(12)}
                    onClick={() => this.showBtnClick(12)}
                  >
                    12
                  </span>
                  <span
                    className={this.showBtnClassName(24)}
                    onClick={() => this.showBtnClick(24)}
                  >
                    24
                  </span>
                  <span
                    className={this.showBtnClassName("all")}
                    onClick={() => this.showBtnClick("all")}
                  >
                    All
                  </span>
                  <span>produtos</span>
                </div>
                <div className="products-sort-by mt-2 mt-lg-0">
                  <strong>Ordenar por</strong>
                  <select
                    name="sort-by"
                    className="form-control"
                    value={this.state.ordenarPor}
                    onChange={this.handleSelectChange}
                  >
                    <option value="vendas">Vendas</option>
                    <option value="AZ">Nome (A - Z)</option>
                    <option value="ZA">Nome (Z - A)</option>
                    <option value="priceAsc">Mais barato</option>
                    <option value="priceDesc">Mais caro</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row products">
          {this.renderProductList(showNProducts)}
        </div>
        <div className="pages">
          <nav
            aria-label="Page navigation example"
            className="d-flex justify-content-center"
          >
            {this.state.showN === "all" ||
            productsByCat.length <= this.state.showN ? null : (
              <ul className="pagination">{this.renderPageList()}</ul>
            )}
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

const mapStateToProps = (state, ownProps) => {
  const allProducts = Object.values(state.products);
  const { categoria, subCategoria, subCategoria2 } = ownProps.categorias;
  return {
    productsByCat: allProducts.filter(({ categorias }) => {
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
