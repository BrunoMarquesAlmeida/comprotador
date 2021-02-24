import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import Breadcrumb from "../Common/Breadcrumb";

import Basket from "./Basket";
import OrderSummary from "./OrderSummary";
import CouponCodes from "./CouponCodes";
import Checkout1 from "./Checkout1";
import Checkout2 from "./Checkout2";
import Checkout3 from "./Checkout3";
import Checkout4 from "./Checkout4";

import { removeFromCart, changeItemAmount, orderChange } from "../../actions";

// hosts all related components, routes and common page state + functions
class ShoppingCart extends React.Component {
  calculateTotalPrice() {
    let totalPrice = 0;

    // maps all the prices of products in the shopping cart and adds them to totalPrice
    Object.values(this.props.shoppingCart).map(({ preco, quantidade }) => {
      totalPrice += parseFloat(preco * quantidade);
    });

    return totalPrice.toFixed(2);
  }

  render() {
    return (
      <div id="content">
        <div className="container">
          <div className="row">
            <Breadcrumb props={this.props} />
            <Route exact path="/carrinho">
              <Basket
                shoppingCart={this.props.shoppingCart}
                goBack={this.props.history.goBack}
                removeFromCart={this.props.removeFromCart}
                changeItemAmount={this.props.changeItemAmount}
                totalPrice={this.calculateTotalPrice()}
              />
            </Route>
            <Route path="/carrinho/checkout1">
              <Checkout1
                orderChange={this.props.orderChange}
                address={this.props.order.address}
                itemAmount={Object.keys(this.props.shoppingCart).length}
              />
            </Route>
            <Route path="/carrinho/checkout2" component={Checkout2} />
            <Route path="/carrinho/checkout3" component={Checkout3} />
            <Route path="/carrinho/checkout4" component={Checkout4} />
            <div className="col-lg-3">
              <OrderSummary
                subTotal={this.calculateTotalPrice()}
                shipCosts={10.0}
              />
              <Route exact path="/carrinho" component={CouponCodes} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// fetches Redux store shoppingCart state
const mapStateToProps = (state) => {
  return {
    shoppingCart: state.shoppingCart,
    order: state.order,
  };
};

export default connect(mapStateToProps, {
  removeFromCart,
  changeItemAmount,
  orderChange,
})(ShoppingCart);
