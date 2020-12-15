import { Link } from "react-router-dom";

import { AddCartIcon } from "../Common/AddCartIcon";
import { NewRibbon } from "../Common/Ribbon";

const Wishlist = () => {
  return (
    <div className="col-lg-9">
      <div className="box">
        <h1>Wishlist</h1>
        <p className="lead">
          Guarde aqui os produtos que despertam o seu interesse.
        </p>
      </div>
      <div className="row products">
        {renderWishlistItem()}
        {renderWishlistItem()}
        {renderWishlistItem()}
        {renderWishlistItem()}
        {renderWishlistItem()}
        {renderWishlistItem()}
      </div>
    </div>
  );
};

function renderWishlistItem() {
  return (
    <div className="col-lg-3 col-md-4">
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
}

export default Wishlist;
