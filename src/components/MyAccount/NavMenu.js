import { NavLink, Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <div className="col-lg-3">
      <div className="card sidebar-menu">
        <div className="card-header">
          <h3 className="h4 card-title">Conta</h3>
        </div>
        <div className="card-body">
          <ul className="nav nav-pills flex-column">
            <NavLink
              exact
              to="/conta"
              activeClassName="active"
              className="nav-link"
            >
              <i className="fa fa-user"></i> Detalhes
            </NavLink>
            <NavLink
              to="/conta/encomendas"
              activeClassName="active"
              className="nav-link"
            >
              <i className="fa fa-list"></i> Encomendas
            </NavLink>
            <NavLink
              to="/conta/wishlist"
              activeClassName="active"
              className="nav-link"
            >
              <i className="fa fa-heart"></i> Wishlist
            </NavLink>
            <Link to="/conta" className="nav-link">
              <i className="fa fa-sign-out"></i> Logout
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
