import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const LoginModal = (props) => {
  return ReactDOM.createPortal(
    <div
      className="modal-open fade show"
      id="login-modal"
      style={{
        height: "100%",
        width: "100%",
        position: "fixed",
        left: "0",
        top: "0",
        background: "rgba(0, 0, 0, 0.5)",
      }}
      onClick={() => props.history.push("/")}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-dialog modal-sm"
        style={{
          margin: "10rem auto",
        }}
      >
        <div className="modal-content">
          <div className="modal-header" style={{ background: "#4fbfa8" }}>
            <h5 className="modal-title" style={{ color: "#fff" }}>
              Login
            </h5>
            <button
              type="button"
              data-dismiss="modal"
              aria-label="Close"
              className="close"
            >
              <Link to={"/"} className="close">
                <span>×</span>
              </Link>
            </button>
          </div>
          <div className="modal-body">
            <form action="customer-orders.html" method="post">
              <div className="form-group">
                <input
                  id="email-modal"
                  type="text"
                  placeholder="email"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  id="password-modal"
                  type="password"
                  placeholder="password"
                  className="form-control"
                />
              </div>
              <p className="text-center">
                <button className="btn btn-primary">
                  <i className="fa fa-sign-in"></i> Log in
                </button>
              </p>
            </form>
            <p className="text-center text-muted">Não está registado?</p>
            <p className="text-center text-muted">
              <a href="register.html">
                <strong>Registe-se agora</strong>
              </a>
              ! Demora apenas um minuto e dá-lhe acesso a descontos especiais e
              muito mais!
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default LoginModal;
