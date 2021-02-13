import React from "react";
import { connect } from "react-redux";

import BreadCrumb from "./BreadCrumb";
import ProductDetail from "./ProductDetail";
import NavMenu from "./NavMenu";

import { fetchProduct } from "../../actions";

class Detail extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.fetchProduct(this.props);
    }
  }

  render() {
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
    fetchComplete: state.products.fetchComplete,
  };
};

export default connect(mapStateToProps, { fetchProduct })(Detail);
