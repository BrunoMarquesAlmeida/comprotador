import { Route } from "react-router-dom";

import Breadcrumb from "../Common/Breadcrumb";

import Basket from "./Basket";
import OrderSummary from "./OrderSummary";
import CouponCodes from "./CouponCodes";
import Checkout1 from "./Checkout1";
import Checkout2 from "./Checkout2";
import Checkout3 from "./Checkout3";
import Checkout4 from "./Checkout4";

const ShoppingCart = (props) => {
  return (
    <div id="content">
      <div className="container">
        <div className="row">
          <Breadcrumb props={props} />
          <Route exact path="/carrinho" component={Basket} />
          <Route path="/carrinho/checkout1" component={Checkout1} />
          <Route path="/carrinho/checkout2" component={Checkout2} />
          <Route path="/carrinho/checkout3" component={Checkout3} />
          <Route path="/carrinho/checkout4" component={Checkout4} />
          <div className="col-lg-3">
            <OrderSummary />
            <Route exact path="/carrinho" component={CouponCodes} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
