import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";
import { Spinner } from "react-bootstrap";

import { NewRibbon } from "../Common/Ribbon";
import { AddCartIcon } from "../Common/AddCartIcon";
import Recomendados from "../Common/Recomendados";
import formatPrice from "../Common/formatPrice";

// hosts enclosing JSX tags and tests whether to render that or a loading spinner
class ProductDetail extends React.Component {
  // user clicked the 'Add to wishlist' button
  addToWishlistClick() {
    if (this.props.isSignedIn) {
      this.props.addToWishlist(this.props.product._id);
    } else {
      this.props.handleLoginShow();
    }
  }

  // user clicked the 'Remove from wishlist' button
  removeFromWishlistClick() {
    this.props.removeFromWishlist(this.props.product._id);
  }

  // decides whether to render the 'Add' or 'Remove' from wishlist button based on if the product is already there
  renderWishlistBtn() {
    const itemIsInWishlist = this.props.wishlist.includes(
      this.props.product._id
    );

    if (itemIsInWishlist && this.props.isSignedIn) {
      return (
        <span
          className="btn btn-outline-primary"
          onClick={() => this.removeFromWishlistClick()}
        >
          Remover da wishlist
          <i className="fa fa-heart fa-icon"></i>
        </span>
      );
    }
    return (
      <span
        className="btn btn-outline-primary"
        onClick={() => this.addToWishlistClick()}
      >
        Adicionar à wishlist
        <i className="fa fa-heart fa-icon"></i>
      </span>
    );
  }

  render() {
    // loading test
    if (
      this.props.fetchComplete !== undefined &&
      this.props.fetchComplete !== null
    ) {
      // result when loading is complete
      const { product } = this.props;
      const images = product.img;
      const { novo, saldos } = product.ribbons;
      const isUserAdmin = this.props.userRole === "admin";

      return (
        <div className="col-lg-9 order-1 order-lg-2">
          <div id="productMain" className="row">
            <div className="col-md-6">
              <div>
                <ReactImageGallery
                  items={images}
                  thumbnailPosition="right"
                  showPlayButton={false}
                  infinite={false}
                  showNav={false}
                />
              </div>
              {saldos ? <NewRibbon tipo="saldos" /> : null}
              {novo ? <NewRibbon tipo="novo" /> : null}
            </div>
            <div className="col-md-6">
              <div className="box">
                <h1 className="text-center">{product.title}</h1>

                <p className="price">
                  <del>
                    {" "}
                    {product.precos.desconto
                      ? formatPrice(product.precos.normal)
                      : ""}
                  </del>{" "}
                  {product.precos.desconto
                    ? formatPrice(product.precos.desconto)
                    : formatPrice(product.precos.normal)}
                  €
                </p>
                <p className="text-center buttons">
                  <AddCartIcon
                    addToCart={this.props.addToCart}
                    product={product}
                  />
                  {this.renderWishlistBtn()}
                  <span
                    className={
                      isUserAdmin ? "btn btn-outline-danger" : "d-none"
                    }
                    onClick={() => console.log("click!")}
                  >
                    Apagar produto
                    <i className="fa fa-trash fa-icon"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div id="details" className="box">
            <p></p>
            {renderDescription(product.description)}
            <br />
            <h4>Especificações técnicas:</h4>
            <ul>{renderSpecs(product.specs)}</ul>
            <hr />
            <div className="social">
              <h4>Partilhar</h4>
              <p>
                <a className="external facebook">
                  <i className="fa fa-facebook"></i>
                </a>
                <a className="external gplus">
                  <i className="fa fa-google-plus"></i>
                </a>
                <a className="external twitter">
                  <i className="fa fa-twitter"></i>
                </a>
                <a className="email">
                  <i className="fa fa-envelope"></i>
                </a>
              </p>
            </div>
          </div>
          <Recomendados />
        </div>
      );
    } else {
      // loading is not complete
      return (
        <div className="col-lg-9 order-1 order-lg-2">
          <div className="row h-100">
            <div className="col-sm-12 my-auto">
              <div className="mx-auto" style={{ width: "2rem" }}>
                <Spinner animation="border" role="status" variant="info">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

// maps a products technical specifications unto JSX
const renderSpecs = function (specs) {
  return specs.map(({ title, content }) => {
    // tests for more than one spec in the same category to decide on how to build the Spec list
    const moreThan1Spec = content.length > 1;
    if (moreThan1Spec) {
      return (
        <li key={title}>
          <b>{title}</b>:
          <ul>
            {content.map((c) => {
              return <li key={c}>{c}</li>;
            })}
          </ul>
        </li>
      );
    } else {
      return (
        <li key={title}>
          <b>{title}</b>: {content}
        </li>
      );
    }
  });
};

// maps through all the description sections and renders them out
const renderDescription = function (description) {
  let key = 0;
  return description.map(function ({ sectionTitle, content }) {
    key++;
    return (
      <div key={key}>
        <h4 className="mb-0">{sectionTitle}</h4>
        <p style={{ textAlign: "justify" }}>{content}</p>
      </div>
    );
  });
};

export default ProductDetail;
