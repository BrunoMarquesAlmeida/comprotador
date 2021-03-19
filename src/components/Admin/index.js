import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Breadcrumb from "../Common/Breadcrumb";
import NavMenu from "../Common/NavMenu";
import AddProduct from "./AddProduct";

class Admin extends React.Component {
  render() {
    return (
      <div id="content">
        <div className="container">
          <div className="row">
            <Breadcrumb props={this.props} />
            <NavMenu subRoutes={subRoutes} title="Conta" />
            <Route exact path="/admin" component={AddProduct} />
          </div>
        </div>
      </div>
    );
  }
}

const subRoutes = [
  {
    path: "/admin",
    name: "Adicionar produto",
    icon: "fa-plus",
    exact: true,
  },
  {
    path: "/",
    name: "Logout",
    icon: "fa-sign-out",
    exact: true,
  },
];

export default Admin;
