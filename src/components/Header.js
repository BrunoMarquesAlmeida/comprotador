import React from "react";
import { Link } from "react-router-dom";
import Categorias from "../categorias";
import { Button, Collapse } from "react-bootstrap";

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { searchOpen: false, navOpen: false, activeKey: "" };
  }

  handleClick(categoria) {
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
          <a
            className="dropdown-toggle nav-link"
            style={{ cursor: "pointer" }}
            onClick={() => this.handleClick(categoria)}
          >
            {categoria}
            <b className="caret"></b>
          </a>
          <ul
            // className={`dropdown-menu megamenu`}
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
                      <Link style={{ color: "#212529" }}>
                        <h5>{subCategoria}</h5>
                      </Link>
                      <ul className="list-unstyled mb-3">
                        {Object.values(Categorias[categoria][subCategoria]).map(
                          (subCategoria2) => {
                            return (
                              <li className="nav-item" key={subCategoria2}>
                                <a href="category.html" className="nav-link">
                                  {subCategoria2}
                                </a>
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

  render() {
    const { navOpen, searchOpen, show } = this.state;
    return (
      <header className="header mb-5">
        {/* Top bar */}
        <div id="top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offer mb-3 mb-lg-0">
                <button className="btn btn-success btn-sm">
                  Oferta do dia
                </button>
                <span className="ml-1">
                  35% desconto em compras acima de 50€!
                </span>
              </div>
              <div className="col-lg-6 text-center text-lg-right">
                <ul className="menu list-inline mb-0">
                  <li className="list-inline-item">
                    <Link to="/login" className="link">
                      Login
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <a href="register.html">Registar</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="contact.html">Contactos</a>
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
                    <Link to="/" className="nav-link active">
                      Home
                    </Link>
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
                <form role="search" className="ml-auto">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Search"
                      className="form-control"
                    />
                    <div className="input-group-append">
                      <button type="button" className="btn btn-primary">
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

export default Header;
