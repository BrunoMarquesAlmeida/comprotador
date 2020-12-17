import { Route } from "react-router-dom";

import Breadcrumb from "../Common/Breadcrumb";
import NavMenu from "../Common/NavMenu";

import Sobre from "./Sobre";
import FAQ from "./FAQ";
import Contactos from "./Contactos";

const Info = (props) => {
  return (
    <div id="content">
      <div className="container">
        <div className="row">
          <Breadcrumb props={props} />
          <NavMenu subRoutes={subRoutes} title="Informações" />
          <Route path="/info/sobre" component={Sobre} />
          <Route path="/info/FAQ" component={FAQ} />
          <Route path="/info/contctos" component={Contactos} />
        </div>
      </div>
    </div>
  );
};

const subRoutes = [
  {
    path: "/info/sobre",
    name: "Sobre",
    icon: null,
  },
  {
    path: "/info/contctos",
    name: "Contactos",
    icon: null,
  },
  {
    path: "/info/FAQ",
    name: "FAQ",
    icon: null,
  },
];

export default Info;
