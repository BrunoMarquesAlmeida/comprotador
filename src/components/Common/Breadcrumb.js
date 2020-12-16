import { Link } from "react-router-dom";
import routes from "../../routes";

const Breadcrumb = (props) => {
  const crumbs = routes
    .filter(({ path }) => props.props.match.path.includes(path))
    .map(({ path, ...rest }) => ({
      path: Object.keys(props.props.match.params).length
        ? Object.keys(props.props.match.params).reduce(
            (path, param) =>
              path.replace(`:${param}`, props.props.match.params[param]),
            path
          )
        : path,
      ...rest,
    }));

  return (
    <div className="col-lg-12">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          {renderBreadcrumbs(crumbs)}
        </ol>
      </nav>
    </div>
  );
};

const renderBreadcrumbs = (crumbs) => {
  return crumbs.map(({ name, path }, key) =>
    key + 1 === crumbs.length ? (
      <li className="breadcrumb-item active" key={key}>
        {name}
      </li>
    ) : (
      <li className="breadcrumb-item" key={key}>
        <Link key={key} to={path}>
          {name}
        </Link>
      </li>
    )
  );
};

export default Breadcrumb;
