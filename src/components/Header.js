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
      searchOpen: false,
      navOpen: false,
      activeKey: "",
      searchTerm: "",
    };
    if (this.props.loginType === "Google") {
      loadGAPI(
        this.props.signIn,
        this.props.signOut,
        this.props.handleLoginClose
      );
    }
  }

  handleCatClick(categoria) {
    const { activeKey } = this.state;
    if (activeKey === categoria) {
      return this.setState({
        activeKey: "",
      });
    }
    this.setState({
      activeKey: categoria,
    });
  }

  renderNavList() {
    const { activeKey } = this.state;
    return Object.keys(Categorias).map((categoria) => {
      return (
        <li className="nav-item dropdown menu-large" key={categoria}>
          <NavLink
            to={`/categoria/${categoria}`}
            className="dropdown-toggle nav-link"
            style={{ cursor: "pointer" }}
            onClick={() => this.handleCatClick(categoria)}
            activeClassName="active"
          >
            {categoria}
            <b className="caret"></b>
          </NavLink>
          <ul
            className={
              activeKey === categoria
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

  componentDidUpdate() {
    const { isAuthenticated } = this.props.auth0;

    if (isAuthenticated) {
      this.props.signIn(this.props.auth0.user.email, "Auth0");
    }
  }

  onSearchSubmit = (e) => {
    e.preventDefault();
    const { searchTerm } = this.state;
    const searchTermIsNotEmpty = searchTerm !== "";
    if (searchTermIsNotEmpty) {
      this.props.history.push(`/procura/${this.state.searchTerm}`);
    }
  };

  onSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { isSignedIn } = this.props;
    const { navOpen, searchOpen } = this.state;

    return (
      <header className="header mb-5">
        {/* Top bar */}
        <div id="top">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offer mb-3 mb-lg-0">
                <Link to="/procura/fonte">
                  <span className="btn btn-success btn-sm">
                    Agora é possível procurar por texto
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
                      onClick={() => this.setState({ searchOpen: !searchOpen })}
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
                    <Link to="/carrinho" className="btn btn-primary navbar-btn">
                      <i className="fa fa-shopping-cart"></i>
                      <span>3 itens</span>
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
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default withRouter(
  connect(mapStateToProps, { signIn, signOut })(withAuth0(Header))
);
