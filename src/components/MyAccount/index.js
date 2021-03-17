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

import {
  fetchUserOrders,
  saveUserAddress,
  fetchUserDetails,
  addToWishlist,
  fetchAllProducts,
  addToCart,
} from "../../actions";

class MyAccount extends Component {
  // detects userId changes and call for update on user orders
  componentDidUpdate(prevProps) {
    const userChanged = prevProps.user.userId !== this.props.user.userId;

    if (userChanged) {
      this.props.fetchUserOrders();
      this.props.fetchUserDetails();
    }
  }

  componentDidMount() {
    this.props.fetchUserOrders();
    this.props.fetchAllProducts();

    if (this.props.user.userId) {
      this.props.fetchUserDetails();
    }
  }

  render() {
    const { orders, address } = this.props.user;

    if (this.props.isSignedIn !== true) {
      return <Redirect to="/">{this.props.handleLoginShow()}</Redirect>;
    }
    return (
      <div id="content">
        <div className="container">
          <div className="row">
            <Breadcrumb props={this.props} />
            <NavMenu subRoutes={subRoutes} title="Conta" />
            <Route path="/conta/wishlist">
              <Wishlist
                products={this.props.products}
                wishlist={this.props.user.wishlist}
                addToCart={this.props.addToCart}
              />
            </Route>
            <Route exact path="/conta">
              <Detail
                address={address}
                saveUserAddress={this.props.saveUserAddress}
              />
            </Route>
            <Route exact path="/conta/encomendas">
              <Encomendas orders={orders} />
            </Route>
            <Route
              path="/conta/encomendas/:id"
              render={(props) => (
                <EncomendaDetalhes {...props} orders={orders} />
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

// routes to map in NavMenu
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
    products: state.products,
  };
};

export default connect(mapStateToProps, {
  fetchUserOrders,
  saveUserAddress,
  fetchUserDetails,
  addToWishlist,
  fetchAllProducts,
  addToCart,
})(MyAccount);
