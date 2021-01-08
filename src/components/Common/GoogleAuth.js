import React from "react";
import { connect } from "react-redux";

import { signIn, signOut } from "../../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "722304695356-cqcjp0t0vgsblhnbvelcfbf36v6tuvl1.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId(), "Google");
      this.props.handleLoginClose();
    } else {
      this.props.signOut();
    }
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  render() {
    return (
      <button
        type="button"
        onClick={this.onSignIn}
        className="btn btn-block btn-social btn-google "
      >
        <span className="fa fa-google fa-icon" />
        Entrar com Google
      </button>
    );
  }
}

// loadGAPI(this.props.signIn, this.props.signOut);
export const loadGAPI = (signIn, signOut, handleLoginClose) => {
  window.gapi.load("client:auth2", () => {
    window.gapi.client
      .init({
        clientId:
          "722304695356-cqcjp0t0vgsblhnbvelcfbf36v6tuvl1.apps.googleusercontent.com",
        scope: "email",
      })
      .then(() => {
        const auth = window.gapi.auth2.getAuthInstance();
        onAuthChange(auth.isSignedIn.get(), auth.currentUser.get().getId());
        auth.isSignedIn.listen(onAuthChange);
      });
  });
  const onAuthChange = (isSignedIn, userID) => {
    if (isSignedIn) {
      signIn(userID, "Google");
      if (handleLoginClose) {
        console.log(handleLoginClose());
      }
    } else {
      signOut();
    }
  };
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
