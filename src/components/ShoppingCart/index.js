import Breadcrumb from "../Common/Breadcrumb";

import Basket from "./Basket";
import OrderSummary from "./OrderSummary";
import CouponCodes from "./CouponCodes";

const ShoppingCart = (props) => {
  return (
    <div id="content">
      <div className="container">
        <div className="row">
          <Breadcrumb props={props} />
          <Basket />
          <OrderSummary />
          <CouponCodes />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
