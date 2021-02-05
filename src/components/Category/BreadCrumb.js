import { NavLink, Link } from "react-router-dom";

const BreadCrumb = (props) => {
  const { categoria, subCategoria, subCategoria2 } = props.params;
  return (
    <div className="col-lg-12">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          {renderBreadCrumb(props.params)}
          {renderCategoria(categoria, subCategoria)}
          {renderSubCategoria(categoria, subCategoria, subCategoria2)}
          {renderSubCategoria2(subCategoria2)}
        </ol>
      </nav>
    </div>
  );
};

const renderBreadCrumb = (params) => {
  if (params.searchTerm) {
    return (
      <>
        <li className="breadcrumb-item active">Procura</li>
        <li className="breadcrumb-item active">{params.searchTerm}</li>
      </>
    );
  }
};

const renderCategoria = (categoria, subCategoria) => {
  if (categoria) {
    if (subCategoria) {
      return (
        <NavLink
          exact
          to={`/categoria/${categoria}`}
          className="breadcrumb-item"
          activeClassName="active"
        >
          {categoria}
        </NavLink>
      );
    }
    return <li className="breadcrumb-item active">{categoria}</li>;
  }
  return;
};

const renderSubCategoria = (categoria, subCategoria, subCategoria2) => {
  if (subCategoria) {
    if (subCategoria2) {
      return (
        <NavLink
          exact
          to={`/categoria/${categoria}/${subCategoria}`}
          className="breadcrumb-item"
          activeClassName="active"
        >
          {subCategoria}
        </NavLink>
      );
    }
    return <li className="breadcrumb-item active">{subCategoria}</li>;
  }
  return;
};

const renderSubCategoria2 = (subCategoria2) => {
  if (subCategoria2) {
    return <li className="breadcrumb-item active">{subCategoria2}</li>;
  }
  return;
};

export default BreadCrumb;
