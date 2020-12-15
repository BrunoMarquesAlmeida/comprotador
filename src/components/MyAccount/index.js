import { Route } from "react-router-dom";

import Breadcrumb from "../Common/Breadcrumb";
import NavMenu from "./NavMenu";
import Wishlist from "./Wishlist";
import Detail from "./Detail";
import Encomendas from "./Encomendas";
import EncomendaDetalhes from "./EncomendaDetalhes";

const MyAccount = (props) => {
  return (
    <div id="content">
      <div className="container">
        <div className="row">
          <Breadcrumb props={props} />
          <NavMenu />
          <Route path="/conta/wishlist" component={Wishlist} />
          <Route exact path="/conta" component={Detail} />
          <Route exact path="/conta/encomendas" component={Encomendas} />
          <Route path="/conta/encomendas/:id" component={EncomendaDetalhes} />
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
