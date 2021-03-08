import { Component } from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Breadcrumb from "../Common/Breadcrumb";
import NavMenu from "../Common/NavMenu";
import Wishlist from "./Wishlist";
import Detail from "./Detail";
import Encomendas from "./Encomendas";
import EncomendaDetalhes from "./EncomendaDetalhes";

import { fetchUserOrders } from "../../actions";

class MyAccount extends Component {
  componentDidUpdate(prevProps) {
    const userChanged = prevProps.user.userId !== this.props.user.userId;
    if (userChanged) {
      this.props.fetchUserOrders();
    }
  }

  componentDidMount() {
    this.props.fetchUserOrders();
  }

  render() {
    if (this.props.isSignedIn === false) {
      return <Redirect to="/">{this.props.handleLoginShow()}</Redirect>;
    }
    return (
      <div id="content">
        <div className="container">
          <div className="row">
            <Breadcrumb props={this.props} />
            <NavMenu subRoutes={subRoutes} title="Conta" />
            <Route path="/conta/wishlist" component={Wishlist} />
            <Route exact path="/conta" component={Detail} />
            <Route exact path="/conta/encomendas">
              <Encomendas orders={this.props.user.orders} />
            </Route>
            <Route path="/conta/encomendas/:id" component={EncomendaDetalhes} />
          </div>
        </div>
      </div>
    );
  }
}

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

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    user: { userId: state.auth.userId, ...state.user },
  };
};

export default connect(mapStateToProps, { fetchUserOrders })(MyAccount);
