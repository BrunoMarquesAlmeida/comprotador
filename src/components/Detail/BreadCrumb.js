import { Link } from "react-router-dom";

const BreadCrumb = (props) => {
  if (props.fetchComplete !== undefined && props.fetchComplete !== null) {
    const { categoria, subCategoria, subCategoria2 } = props.product.categorias;
    const { title } = props.product;
    return (
      <div className="col-lg-12">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/categoria/${categoria}`}>{categoria}</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/categoria/${categoria}/${subCategoria}`}>
                {subCategoria}
              </Link>
            </li>
            {subCategoria2 ? (
              <li className="breadcrumb-item">
                <Link
                  to={`/categoria/${categoria}/${subCategoria}/${subCategoria2}`}
                >
                  {subCategoria2}
                </Link>
              </li>
            ) : null}
            <li className="breadcrumb-item active">{title}</li>
          </ol>
        </nav>
      </div>
    );
  } else {
    return (
      <div className="col-lg-12">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">Loading...</li>
          </ol>
        </nav>
      </div>
    );
  }
};

export default BreadCrumb;
