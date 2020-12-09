import { Link } from "react-router-dom";

import { NewRibbon } from "../Common/Ribbon";
import { AddCartIcon } from "../Common/AddCartIcon";

const ProductList = (props) => {
  return (
    <div className="col-lg-9">
      <div className="box titleBox">
        <h1>{renderTitleBox(props)}</h1>
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
        {renderProductList()}
        {renderProductList()}
        {renderProductList()}
      </div>
    </div>
  );
};

const renderTitleBox = (props) => {
  const { categoria, subCategoria } = props.categorias;

  if (subCategoria) {
    return subCategoria;
  }
  return categoria;
};

const renderProductList = () => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="product">
        <Link to="/detalhes/xxxyyyzzz">
          <img
            src="assets/img/produtos/1_337_1.jpg"
            alt=""
            className="img-fluid"
          />
        </Link>
        <div className="text">
          <h3>
            <Link to="/detalhes/xxxyyyzzz">Mini PC GMK NucBox</Link>
          </h3>
          <p className="price">
            <del> 289,90€</del> 229,90€
          </p>
          <p className="buttons">
            <Link
              to="/detalhes/xxxyyyzzz"
              className="btn btn-outline-secondary"
            >
              Ver detalhes
            </Link>
            <AddCartIcon />
          </p>
        </div>
        <NewRibbon tipo="novo" />
        <NewRibbon tipo="saldos" />
      </div>
    </div>
  );
};

export default ProductList;
