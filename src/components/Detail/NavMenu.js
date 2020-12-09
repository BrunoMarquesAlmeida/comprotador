import Categorias from "../../categorias";
import { NavLink, Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <div className="col-lg-3 order-2 order-lg-1">
      <div className="card sidebar-menu mb-4">
        <div className="card-header">
          <h3 className="h4 card-title">Categorias</h3>
        </div>
        <div className="card-body">
          <ul className="nav nav-pills flex-column category-menu">
            {renderNavList()}
          </ul>
        </div>
      </div>
    </div>
  );
};

const renderNavList = () => {
  return Object.keys(Categorias).map((categoria) => {
    return (
      <li>
        <NavLink
          to={`/categoria/${categoria}`}
          className="nav-link"
          activeClassName="active"
          key={categoria}
        >
          {categoria}
        </NavLink>
        <ul className="list-unstyled">
          {Object.keys(Categorias[categoria]).map((subCategoria) => {
            return (
              <li>
                <Link to={`/categoria/${categoria}/${subCategoria}`}>
                  {subCategoria}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
    );
  });
};

export default NavMenu;
