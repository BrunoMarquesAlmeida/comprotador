// import { Link } from "react-router-dom";

import GoogleAuth from "./Common/GoogleAuth";
import FBAuth from "./Common/FBAuth";

const LoginModal = (props) => {
  return (
    <>
      <div className="modal-header" style={{ background: "#4fbfa8" }}>
        <h5 className="modal-title" style={{ color: "#fff" }}>
          Login
        </h5>
        <button type="button" className="close" onClick={props.hideFunction}>
          <span>×</span>
        </button>
      </div>
      <div className="modal-body">
        <GoogleAuth />
        <hr />
        <FBAuth hideFunction={props.hideFunction} />
        {/* <hr />
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
          <Link to="/">
            <strong>Registe-se agora</strong>
          </Link>
          ! Demora apenas um minuto e dá-lhe acesso a descontos especiais e
          muito mais!
        </p> */}
      </div>
    </>
  );
};

export default LoginModal;
