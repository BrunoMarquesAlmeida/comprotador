import { Route } from "react-router-dom";

import Breadcrumb from "../Common/Breadcrumb";

import Sobre from "./Sobre";
import FAQ from "./FAQ";
import Contactos from "./Contactos";

const Info = (props) => {
  return (
    <div id="content">
      <div className="container">
        <div className="row">
          <Breadcrumb props={props} />
          <Route path="/info/sobre" component={Sobre} />
          <Route path="/info/FAQ" component={FAQ} />
          <Route path="/info/contactos" component={Contactos} />
        </div>
      </div>
    </div>
  );
};

export default Info;
