import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="col-lg-12">
      <div id="error-page" className="row">
        <div className="col-md-6 mx-auto">
          <div className="box text-center py-5">
            <p className="text-center">
              <img src="assets/img/logo.png" alt="Logo" />
            </p>
            <h3>Ups! Esta página não existe.</h3>
            <h4 className="text-muted">Error 404 - Page not found</h4>
            <p className="text-center">
              Para continuar por favor utilize o{" "}
              <strong> Campo de pesquisa</strong> ou o <strong>Menu</strong>{" "}
              superior.
            </p>
            <p className="buttons">
              <Link to="/" className="btn btn-primary">
                <i className="fa fa-home"></i> Voltar para o Ínicio
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
