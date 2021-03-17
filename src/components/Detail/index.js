import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import BreadCrumb from "./BreadCrumb";
import ProductDetail from "./ProductDetail";
import NavMenu from "./NavMenu";

import {
  fetchProduct,
  addToCart,
  addToWishlist,
  fetchUserDetails,
  removeFromWishlist,
} from "../../actions";
import { db } from "../../produtos";

class Detail extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props);

    window.scrollTo(0, 0);

    if (this.props.isSignedIn) {
      this.props.fetchUserDetails();
    }
  }

  componentDidUpdate(prevProps) {
    const productIDChanged =
      this.props.match.params.id !== prevProps.match.params.id;
    const isSignedInChanged = prevProps.isSignedIn !== this.props.isSignedIn;

    if (productIDChanged) {
      this.props.fetchProduct(this.props);
      window.scrollTo(0, 0);
    }

    if (isSignedInChanged) {
      if (this.props.isSignedIn) {
        this.props.fetchUserDetails();
      }
    }
  }

  render() {
    if (this.props.product === undefined && this.props.fetchComplete) {
      return <Redirect to="/404" />;
    }
    return (
      <div id="content" key={this.props.match.params}>
        <div className="container">
          <div className="row">
            <BreadCrumb
              product={this.props.product}
              fetchComplete={this.props.fetchComplete}
            />
            <NavMenu />
            <ProductDetail
              product={this.props.product}
              fetchComplete={this.props.fetchComplete}
              addToCart={this.props.addToCart}
              addToWishlist={this.props.addToWishlist}
              handleLoginShow={this.props.handleLoginShow}
              isSignedIn={this.props.isSignedIn}
              wishlist={this.props.wishlist}
              removeFromWishlist={this.props.removeFromWishlist}
            />
          </div>
          <div style={{ marginBottom: "30px" }} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.products[ownProps.match.params.id],
    // product: db.produtos[ownProps.match.params.id],
    fetchComplete: state.products.fetchComplete,
    isSignedIn: state.auth.isSignedIn,
    wishlist: state.user.wishlist,
  };
};

export default connect(mapStateToProps, {
  fetchProduct,
  addToCart,
  addToWishlist,
  fetchUserDetails,
  removeFromWishlist,
})(Detail);
