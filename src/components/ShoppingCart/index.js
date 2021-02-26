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

import {
  removeFromCart,
  changeItemAmount,
  orderChange,
  orderPlace,
} from "../../actions";

// hosts all related components, routes and common page state + functions
class ShoppingCart extends React.Component {
  calculateSubTotal() {
    let totalPrice = 0;

    // maps all the prices of products in the shopping cart and adds them to totalPrice
    Object.values(this.props.shoppingCart).map(({ preco, quantidade }) => {
      totalPrice += parseFloat(preco * quantidade);
    });

    return totalPrice.toFixed(2);
  }

  calculateDeliveryCost() {
    const { delivery } = this.props.order;
    let deliveryCost = 0;
    if (delivery.method === "normal") {
      deliveryCost = 5;
      return deliveryCost;
    }
    if (delivery.method === "express") {
      deliveryCost = 10;
      return deliveryCost;
    }
    return deliveryCost;
  }

  calculateTotal() {
    const deliveryCost = this.calculateDeliveryCost();
    const subTotal = parseFloat(this.calculateSubTotal());
    const total = deliveryCost + subTotal;

    return total;
  }

  render() {
    // const cartIsEmpty = Object.keys(this.props.shoppingCart).length === 0;
    const cartIsEmpty = false;
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
                totalPrice={this.calculateSubTotal()}
              />
            </Route>
            <Route path="/carrinho/checkout1">
              <Checkout1
                push={this.props.history.push}
                orderChange={this.props.orderChange}
                address={this.props.order.address}
                cartIsEmpty={cartIsEmpty}
              />
            </Route>
            <Route path="/carrinho/checkout2">
              <Checkout2
                push={this.props.history.push}
                orderChange={this.props.orderChange}
                delivery={this.props.order.delivery}
                cartIsEmpty={cartIsEmpty}
              />
            </Route>
            <Route path="/carrinho/checkout3">
              <Checkout3
                push={this.props.history.push}
                orderChange={this.props.orderChange}
                payment={this.props.order.payment}
                cartIsEmpty={cartIsEmpty}
                shoppingCart={this.props.shoppingCart}
              />
            </Route>
            <Route path="/carrinho/checkout4">
              <Checkout4
                push={this.props.history.push}
                cartIsEmpty={cartIsEmpty}
                totalPrice={this.calculateSubTotal()}
                shoppingCart={this.props.shoppingCart}
                orderPlace={this.props.orderPlace}
                deliveryCost={this.calculateDeliveryCost()}
                total={this.calculateTotal()}
              />
            </Route>
            <div className="col-lg-3">
              <OrderSummary
                subTotal={this.calculateSubTotal()}
                deliveryCost={this.calculateDeliveryCost()}
                total={this.calculateTotal()}
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
  orderPlace,
})(ShoppingCart);
