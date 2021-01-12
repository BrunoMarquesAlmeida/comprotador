import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import GoogleAuth from "./Common/GoogleAuth";
import FBAuth from "./Common/FBAuth";

const LoginModal = (props) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <div className="modal-header" style={{ background: "#4fbfa8" }}>
        <h5 className="modal-title" style={{ color: "#fff" }}>
          Login
        </h5>
        <button
          type="button"
          className="close"
          onClick={props.handleLoginClose}
        >
          <span>×</span>
        </button>
      </div>
      <div className="modal-body">
        <GoogleAuth handleLoginClose={props.handleLoginClose} />
        <hr />
        <FBAuth handleLoginClose={props.handleLoginClose} />
        <hr />
        <p className="text-center">
          <button
            className="btn btn-primary"
            onClick={() => loginWithRedirect()}
          >
            <i className="fa fa-sign-in"></i> Entrar com email e password
          </button>
        </p>
        <p className="text-center text-muted">Não está registado?</p>
        <p className="text-center text-muted">
          <a
            href="#"
            onClick={() =>
              loginWithRedirect({
                screen_hint: "signup",
              })
            }
          >
            <strong>Registe-se agora</strong>
          </a>
          ! Demora apenas um minuto e dá-lhe acesso a descontos especiais e
          muito mais!
        </p>
      </div>
    </>
  );
};

export default LoginModal;
