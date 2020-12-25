import React from "react";
import { connect } from "react-redux";

import { NavLink, Redirect } from "react-router-dom";
import { loadGAPI } from "./GoogleAuth";
import { signIn, signOut } from "../../actions";

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logoutClick: false,
    };
  }
  componentDidMount() {
    if (this.props.loginType === "Google") {
      loadGAPI(this.props.signIn, this.props.signOut);
    }
  }
  renderNavLinks = ({ subRoutes }) => {
    return subRoutes.map(({ name, path, icon, exact }) => {
      if (name === "Logout") {
        return (
          <span
            onClick={this.handleLogoutClick}
            key={name}
            className="nav-link navMenuBtn"
          >
            {icon ? <i className={`fa ${icon}`}></i> : ""} {name}
          </span>
        );
      } else {
        return (
          <NavLink
            exact={exact}
            to={path}
            activeClassName="active"
            className="nav-link"
            key={name}
          >
            {icon ? <i className={`fa ${icon}`}></i> : ""} {name}
          </NavLink>
        );
      }
    });
  };
  handleLogoutClick = () => {
    if (this.props.loginType === "Google") {
      window.gapi.auth2.getAuthInstance().signOut();
    } else if (this.props.loginType === "Facebook") {
      window.FB.logout((response) => {
        if (response.status === "unknown") {
          this.props.signOut();
        }
      });
    }
    this.setState({
      logoutClick: true,
    });
  };

  render() {
    const { subRoutes, title } = this.props;
    if (this.state.logoutClick === false) {
      return (
        <div className="col-lg-3">
          <div className="card sidebar-menu mb-4">
            <div className="card-header">
              <h3 className="h4 card-title">{title}</h3>
            </div>
            <div className="card-body">
              <ul className="nav nav-pills flex-column">
                {this.renderNavLinks({ subRoutes })}
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loginType: state.auth.loginType,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(NavMenu);
