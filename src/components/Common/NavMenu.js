import { NavLink } from "react-router-dom";

const NavMenu = (props) => {
  const { subRoutes, title } = props;
  return (
    <div className="col-lg-3">
      <div className="card sidebar-menu">
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

const renderNavLinks = function ({ subRoutes }) {
  return subRoutes.map(({ name, path, icon, exact }) => {
    return (
      <NavLink
        exact={exact}
        to={path}
        activeClassName="active"
        className="nav-link"
      >
        {icon ? <i className={`fa ${icon}`}></i> : ""} {name}
      </NavLink>
    );
  });
};

export default NavMenu;
