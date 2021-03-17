import { Link } from "react-router-dom";

import { AddCartIcon } from "../Common/AddCartIcon";
import { NewRibbon } from "../Common/Ribbon";

const Wishlist = (props) => {
  const wishlistProducts = Object.values(props.products).filter(({ _id }) =>
    props.wishlist.includes(_id)
  );

  const renderWishlistItems = function () {
    return wishlistProducts.map((product) => {
      const { img, _id, title, precos, ribbons } = product;
      return (
        <div className="col-lg-3 col-md-4" key={_id}>
          <div className="product">
            <Link to={"/detalhes/" + _id}>
              <img src={img[0].original} alt="" className="img-fluid" />
            </Link>
            <div className="text">
              <h3>
                <Link to="/detalhes/xxxyyyzzz">{title}</Link>
              </h3>
              <p className="price">
                {precos.desconto ? (
                  <>
                    <del> {precos.normal}€</del> {precos.desconto}€
                  </>
                ) : (
                  <>{precos.normal}</>
                )}
              </p>
              <p className="buttons">
                <Link
                  to={"/detalhes/" + _id}
                  className="btn btn-outline-secondary"
                >
                  Ver detalhes
                </Link>
                <AddCartIcon addToCart={props.addToCart} product={product} />
              </p>
            </div>
            {ribbons.novo ? <NewRibbon tipo="novo" /> : null}
            {ribbons.saldos ? <NewRibbon tipo="saldos" /> : null}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="col-lg-9">
      <div className="box">
        <h1>Wishlist</h1>
        <p className="lead">
          Guarde aqui os produtos que despertam o seu interesse.
        </p>
      </div>
      <div className="row products">{renderWishlistItems()}</div>
    </div>
  );
};

export default Wishlist;
