import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

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
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button
          type="button"
          onClick={this.onSignOut}
          className="btn btn-block btn-social btn-google"
        >
          <span className="fa fa-google fa-icon" />
          Sair
        </button>
      );
    } else {
      return (
        <button
          type="button"
          onClick={this.onSignIn}
          className="btn btn-block btn-social btn-google"
        >
          <span className="fa fa-google fa-icon" />
          Entrar com Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default connect(null, { signOut, signOut })(GoogleAuth);
