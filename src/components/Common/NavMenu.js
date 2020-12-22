import { connect } from "react-redux";

import { NavLink } from "react-router-dom";
import { loadGAPI } from "./GoogleAuth";
import { signIn, signOut } from "../../actions";

const NavMenu = (props) => {
  loadGAPI(props.signIn, props.signOut);

  const { subRoutes, title } = props;
  return (
    <div className="col-lg-3">
      <div className="card sidebar-menu mb-4">
        <div className="card-header">
          <h3 className="h4 card-title">{title}</h3>
        </div>
        <div className="card-body">
          <ul className="nav nav-pills flex-column">
            {renderNavLinks({ subRoutes })}
          </ul>
        </div>
      </div>
    </div>
  );
};

const handleLogoutClick = () => {
  window.gapi.auth2.getAuthInstance().signOut();
};

const renderNavLinks = function ({ subRoutes }) {
  return subRoutes.map(({ name, path, icon, exact }) => {
    if (name === "Logout") {
      return (
        <span
          onClick={handleLogoutClick}
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

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(NavMenu);
