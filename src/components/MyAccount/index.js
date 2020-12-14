import { Route } from "react-router-dom";

import Breadcrumb from "../Common/Breadcrumb";
import NavMenu from "./NavMenu";
import Wishlist from "./Wishlist";
import Detail from "./Detail";
import Encomendas from "./Encomendas";

const MyAccount = (props) => {
  return (
    <div id="content">
      <div className="container">
        <div className="row">
          <Breadcrumb props={props} />
          <NavMenu />
          <div className="col-lg-9">
            <Route path="/conta/wishlist" component={Wishlist} />
            <Route exact path="/conta" component={Detail} />
            <Route path="/conta/encomendas" component={Encomendas} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
