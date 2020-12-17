import { Link } from "react-router-dom";
import React from "react";
import { Modal } from "react-bootstrap";

import LoginModal from "./LoginModal";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
    };
  }

  handleLoginShow = () => {
    this.setState({
      showLogin: true,
    });
  };

  handleLoginClose = () => {
    this.setState({
      showLogin: false,
    });
  };
  render() {
    const { showLogin } = this.state;
    return (
      <>
        <Modal show={showLogin} onHide={this.handleLoginClose}>
          <LoginModal hideFunction={this.handleLoginClose} />
        </Modal>
        <div id="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <h4 className="mb-3">Páginas</h4>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/info/sobre" href="text.html">
                      Sobre
                    </Link>
                  </li>
                  <li>
                    <Link to="/info/contctos">Contactos</Link>
                  </li>
                  <li>
                    <Link to="/info/FAQ">FAQ</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="mb-3">Utilizador</h4>
                <ul className="list-unstyled">
                  <li>
                    <button
                      className="footer-link"
                      onClick={this.handleLoginShow}
                    >
                      Login
                    </button>
                  </li>
                  <li>
                    <Link to="/conta">Conta</Link>
                  </li>
                  <li>
                    <Link to="/">Registar</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="mb-3">Onde nos encontrar</h4>
                <p>
                  <strong>ComproTador Ltd.</strong>
                  <br />R Conselheiro João Cunha 43
                  <br />
                  Viana Do Castelo
                  <br />
                  4900-558
                  <br />
                  <strong>Portugal</strong>
                </p>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="mb-3">Entre em contacto</h4>
                <p className="social">
                  <Link to="/" className="facebook external">
                    <i className="fa fa-facebook"></i>
                  </Link>
                  <Link to="/" className="twitter external">
                    <i className="fa fa-twitter"></i>
                  </Link>
                  <Link to="/" className="instagram external">
                    <i className="fa fa-instagram"></i>
                  </Link>
                  <Link to="/" className="gplus external">
                    <i className="fa fa-google-plus"></i>
                  </Link>
                  <Link to="/" className="email external">
                    <i className="fa fa-envelope"></i>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-2 mb-lg-0">
                <p className="text-center text-lg-left">©2020 ComproTador.</p>
              </div>
              <div className="col-lg-6">
                <p className="text-center text-lg-right">
                  Template design by <></>
                  <a href="https://bootstrapious.com/">Bootstrapious</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
