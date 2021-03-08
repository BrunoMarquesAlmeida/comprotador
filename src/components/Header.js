import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { Button, Collapse } from "react-bootstrap";
import { connect } from "react-redux";

import { withAuth0 } from "@auth0/auth0-react";

import Categorias from "../categorias";
import { signIn, signOut } from "../actions";
import { loadGAPI } from "./Common/GoogleAuth";

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      // state of the Search Bar
      searchOpen: false,
      // where the search term is kept
      searchTerm: "",

      // state of the NavMenu (for mobile only)
      navOpen: false,

      // activeCat keeps track of what category the user is browsing through
      activeCat: "",

      cartChange: null,
      changedProduct: null,
      removedProduct: null,
    };
    // loadGAPI to know if user is signed in through Google
    if (this.props.loginType === "Google") {
      loadGAPI(
        this.props.signIn,
        this.props.signOut,
        this.props.handleLoginClose
      );
    }
  }

  // Handle the main categories' clicks' in the main NavMenu
  handleCatClick(categoria, e) {
    const { activeCat } = this.state;

    // prevent navigation through this button
    e.preventDefault();

    // if this category is already selected this unselects it
    if (activeCat === categoria) {
      return this.setState({
        activeCat: "",
      });
    }

    // otherwise we keep category name in state
    this.setState({
      activeCat: categoria,
    });
  }

  // This maps the 'Categorias' object from categorias.js and all its SubCategories and renders all the links
  renderNavList() {
    const { activeCat } = this.state;

    return Object.keys(Categorias).map((categoria) => {
      return (
        <li className="nav-item dropdown menu-large" key={categoria}>
          {/* here we use <NavLink> despite not using it to navigate because activeClassName 
          allows us to show this element as active even if we navigate directly through URL */}
          <NavLink
            to={`/categoria/${categoria}`}
            className="dropdown-toggle nav-link"
            style={{ cursor: "pointer" }}
            onClick={(e) => this.handleCatClick(categoria, e)}
            activeClassName="active"
          >
            {categoria}
            <b className="caret"></b>
          </NavLink>
          <ul
            // if this element belongs to the active Category this shows the megamenu
            className={
              activeCat === categoria
                ? "dropdown-menu megamenu show"
                : "dropdown-menu megamenu"
            }
          >
            <li>
              <div className="row">
                {Object.keys(Categorias[categoria]).map((subCategoria) => {
                  return (
                    <div className="col-md-6 col-lg-3" key={subCategoria}>
                      <Link
                        to={`/categoria/${categoria}/${subCategoria}`}
                        style={{ color: "#212529" }}
                        onClick={() => this.setState({ navOpen: false })}
                      >
                        <h5>{subCategoria}</h5>
                      </Link>
                      <ul className="list-unstyled mb-3">
                        {Object.values(Categorias[categoria][subCategoria]).map(
                          (subCategoria2) => {
                            return (
                              <li className="nav-item" key={subCategoria2}>
                                <Link
                                  to={`/categoria/${categoria}/${subCategoria}/${subCategoria2}`}
                                  href="category.html"
                                  className="nav-link"
                                  onClick={() =>
                                    this.setState({ navOpen: false })
                                  }
                                >
                                  {subCategoria2}
                                </Link>
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </li>
          </ul>
        </li>
      );
    });
  }

  // Render LoginBtn if user is signed in } else { render the 'Account' access button
  renderLoginBtn(isSignedIn) {
    if (isSignedIn) {
      return (
        <Link to="/conta" href="register.html">
          Conta
        </Link>
      );
    } else {
      return (
        <button onClick={this.props.handleLoginShow} className="link">
          Login
        </button>
      );
    }
  }

  componentDidUpdate(prevProps) {
    const { isAuthenticated } = this.props.auth0;

    // check if user is authenticated
    if (isAuthenticated) {
      this.props.signIn(this.props.auth0.user.email, "Auth0");
    }

    // check if there was an order attempt made and if it was succesfull
    if (prevProps !== this.props) {
      if (this.props.order.status === 201) {
        this.setState({ cartChange: "sucess" });
      }

      if (this.props.order.status === "error") {
        this.setState({ cartChange: "error" });
      }
    }

    // check if there was any product added to shopping cart
    Object.values(this.props.shoppingCart).map((product) => {
      const productWasAdded = prevProps.shoppingCart[product._id] === undefined;
      if (productWasAdded) {
        this.setState({
          changedProduct: product.title,
          cartChange: "add",
        });
      }
    });

    // check if there was any product removed from shopping cart
    Object.values(prevProps.shoppingCart).map((product) => {
      const productWasRemoved =
        this.props.shoppingCart[product._id] === undefined;
      if (productWasRemoved) {
        this.setState({
          changedProduct: product.title,
          cartChange: "remove",
        });
      }
    });
  }

  // Handle submitting a search term
  onSearchSubmit = (e) => {
    const { searchTerm } = this.state;
    const searchTermIsNotEmpty = searchTerm !== "";

    // to prevent from default form submittal behaviour
    e.preventDefault();

    // this navigates the user to '/procura/searchTerm' when term is submited
    if (searchTermIsNotEmpty) {
      this.props.history.push(`/procura/${this.state.searchTerm}`);
    }
  };

  // Where we update the 'searchTerm' piece of state
  onSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  // decide what notification to show in the bar
  renderNotificationBar() {
    const productWasAdded = this.state.cartChange === "add";
    const orderSucess = this.state.cartChange === "sucess";
    const productWasRemoved = this.state.cartChange === "remove";
    const orderError = this.state.cartChange === "error";

    if (productWasAdded || orderSucess) {
      return (
        <div>
          <i className="fa fa-check-circle green"></i>{" "}
          {productWasAdded ? (
            <>
              Adicionou <b>{this.state.changedProduct}</b>
              &nbsp;ao &nbsp;
              <Link to="/carrinho">Carrinho de Compras</Link>
            </>
          ) : (
            <>
              <b>Encomenda feita com sucesso.</b> Irá receber um email com mais
              detalhes. <b>Obrigado!</b>
            </>
          )}
        </div>
      );
    }

    if (productWasRemoved || orderError) {
      return (
        <div>
          <i className="fa fa-times-circle red"></i>{" "}
          {productWasRemoved ? (
            <>
              Removeu <b>{this.state.changedProduct}</b>
              &nbsp;do&nbsp;
              <Link to="/carrinho">Carrinho de Compras</Link>
            </>
          ) : (
            "Algo correu mal com a encomenda. Por favor tente outra vez."
          )}
        </div>
      );
    }
  }

  render() {
    const { isSignedIn } = this.props;
    const { navOpen, searchOpen } = this.state;
    const cartItemAmount = Object.keys(this.props.shoppingCart).length;

    return (
      <>
        <header className="header mb-5">
          {/* Top bar */}
          <div id="top">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 offer mb-3 mb-lg-0">
                  <Link to="/carrinho">
                    <span className="btn btn-success btn-sm">
                      Agora é possível fazer encomendas
                    </span>
                    <span className="ml-1">
                      Clique aqui para conhecer a última atualização ao site
                    </span>
                  </Link>
                </div>
                <div className="col-lg-2 text-center text-lg-right">
                  <ul className="menu list-inline mb-0">
                    <li className="list-inline-item">
                      {this.renderLoginBtn(isSignedIn)}
                    </li>

                    <li className="list-inline-item">
                      <Link to="/info/contctos">Contactos</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Nav bar */}
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              {/* Logotipos */}
              <Link to={"/"} className="navbar-brand home">
                <img
                  src="assets/img/logo.png"
                  alt="ComproTador logo"
                  className="d-none d-md-inline-block"
                />
                <img
                  src="assets/img/logo-small.png"
                  alt="ComproTador logo"
                  className="d-inline-block d-md-none"
                />
                <span className="sr-only">ComproTador - Homepage</span>
              </Link>

              {/* Btn mobile */}
              <div className="navbar-buttons">
                <Button
                  variant="secondary"
                  type="button"
                  className="btn btn-outline-secondary navbar-toggler"
                  onClick={() => this.setState({ navOpen: !navOpen })}
                  aria-controls="collapse-dropdown"
                  aria-expanded={navOpen}
                >
                  <span className="sr-only">Toggle navigation</span>
                  <i className="fa fa-align-justify"></i>
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  className="btn btn-outline-secondary navbar-toggler"
                  onClick={() => this.setState({ searchOpen: !searchOpen })}
                  aria-controls="collapse-search"
                  aria-expanded={searchOpen}
                >
                  <span className="sr-only">Toggle search</span>
                  <i className="fa fa-search"></i>
                </Button>
                <Link
                  to="/carrinho"
                  className="btn btn-outline-secondary navbar-toggler"
                >
                  <i className="fa fa-shopping-cart"></i>
                </Link>
              </div>

              <Collapse in={this.state.navOpen}>
                <div id="collapse-dropdown" className="navbar-collapse">
                  {/* NavList */}
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <NavLink
                        exact
                        to="/"
                        className="nav-link"
                        activeClassName="active"
                      >
                        Home
                      </NavLink>
                    </li>
                    {this.renderNavList()}
                  </ul>

                  {/* Btn desktop */}
                  <div className="navbar-buttons d-flex justify-content-end">
                    <div
                      id="search-not-mobile"
                      className="navbar-collapse collapse"
                    ></div>
                    <div
                      id="basket-overview"
                      className="navbar-collapse collapse d-none d-lg-block"
                    >
                      <Button
                        className={`btn navbar-btn btn-primary d-none d-lg-inline-block`}
                        onClick={() =>
                          this.setState({ searchOpen: !searchOpen })
                        }
                        aria-controls="collapse-search"
                        aria-expanded={searchOpen}
                      >
                        <span className="sr-only">Toggle search</span>
                        <i className="fa fa-search"></i>
                      </Button>
                    </div>
                    <div
                      id="basket-overview"
                      className="navbar-collapse collapse d-none d-lg-block"
                    >
                      <Link
                        to="/carrinho"
                        className="btn btn-primary navbar-btn"
                      >
                        <i className="fa fa-shopping-cart"></i>
                        <span>{cartItemAmount} itens</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>
          </nav>
          <Collapse in={this.state.searchOpen}>
            <div id="collapse-search">
              <div id="search">
                <div className="container">
                  <form
                    role="search"
                    className="ml-auto"
                    onSubmit={this.onSearchSubmit}
                  >
                    <div className="input-group">
                      <input
                        type="text"
                        placeholder="Search"
                        className="form-control"
                        onChange={this.onSearchChange}
                        value={this.state.searchTerm}
                      />
                      <div className="input-group-append">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={this.onSearchSubmit}
                        >
                          <i className="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Collapse>
        </header>

        {/* this.state.cartChange is tested to check if item was added or removed from cart */}
        <div id="content" key={this.props.match.params}>
          <div className="container">
            <div className="row">
              <div
                className={
                  this.state.cartChange !== null ? "col-lg-12" : "d-none"
                }
              >
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb text-muted">
                    {this.renderNotificationBar()}{" "}
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

// Access to the Auth part of the Redux store, we need this to keep track of the user isSignedIn state through the app
const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    shoppingCart: state.shoppingCart,
    order: state.order,
  };
};

// Exporting this withRouter allows us to use the history object outside of the Switch we have set up
export default withRouter(
  connect(mapStateToProps, { signIn, signOut })(withAuth0(Header))
);
