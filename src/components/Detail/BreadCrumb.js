import { Link } from "react-router-dom";

const BreadCrumb = () => {
  return (
    <div className="col-lg-12">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/categoria/Computadores">Computadores</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/categoria/Computadores/Desktops">Desktops</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/categoria/Computadores/Desktops/Gaming">Gaming</Link>
          </li>
          <li aria-current="page" className="breadcrumb-item active">
            Mini PC GMK NucBox
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumb;
