import { Route } from "react-router-dom";

import Breadcrumb from "../Common/Breadcrumb";
import NavMenu from "../Common/NavMenu";
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
          <NavMenu subRoutes={subRoutes} title="Conta" />
          <Route path="/conta/wishlist" component={Wishlist} />
          <Route exact path="/conta" component={Detail} />
          <Route exact path="/conta/encomendas" component={Encomendas} />
          <Route path="/conta/encomendas/:id" component={EncomendaDetalhes} />
        </div>
      </div>
    </div>
  );
};

const subRoutes = [
  {
    path: "/conta",
    name: "Detalhes",
    icon: "fa-user",
    exact: true,
  },
  {
    path: "/conta/encomendas",
    name: "Encomendas",
    icon: "fa-list",
    exact: false,
  },
  {
    path: "/conta/wishlist",
    name: "Wishlist",
    icon: "fa-heart",
    exact: true,
  },
  {
    path: "/",
    name: "Logout",
    icon: "fa-sign-out",
    exact: true,
  },
];
export default MyAccount;
