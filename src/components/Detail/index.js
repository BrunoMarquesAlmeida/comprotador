import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import BreadCrumb from "./BreadCrumb";
import ProductDetail from "./ProductDetail";
import NavMenu from "./NavMenu";

import { fetchProduct, addToCart, addToWishlist } from "../../actions";
import { db } from "../../produtos";

class Detail extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props);
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.fetchProduct(this.props);
      window.scrollTo(0, 0);
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
  };
};

export default connect(mapStateToProps, {
  fetchProduct,
  addToCart,
  addToWishlist,
})(Detail);
