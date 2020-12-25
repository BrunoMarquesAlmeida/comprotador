import React from "react";
import { connect } from "react-redux";

import { signIn } from "../../actions";

class FBAuth extends React.Component {
  loginClick = () => {
    window.FB.login((response) => {
      if (response.status === "connected") {
        this.props.signIn(response.authResponse.userID, "Facebook");
        this.props.hideFunction();
      }
    });
  };

  render() {
    return (
      <button
        type="button"
        onClick={this.loginClick}
        className="btn btn-block btn-social btn-facebook"
      >
        <span className="fa fa-facebook fa-icon" />
        Entrar com Facebook
      </button>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn })(FBAuth);
