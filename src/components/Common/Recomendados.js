import { Link } from "react-router-dom";

const Recomendados = (
  <div className="row same-height-row">
    <div className="col-md-3 col-sm-6" style={{ display: "grid" }}>
      <div className="box">
        <h3>Produtos recomendados</h3>
      </div>
    </div>

    <div className="col-md-3 col-sm-6">
      <div className="product">
        <Link to="/detalhes/xxxyyyzzz">
          <img
            src="assets/img/produtos/1085_1.jpg"
            alt=""
            className="img-fluid"
          />
        </Link>

        <div className="text">
          <h3>Teclado Mecânico Asus Sagaris</h3>
          <p className="price">54,90€</p>
        </div>
      </div>
    </div>
    <div className="col-md-3 col-sm-6">
      <div className="product">
        <Link to="/detalhes/xxxyyyzzz">
          <img
            src="assets/img/produtos/1_p030470_2.jpg"
            alt=""
            className="img-fluid"
          />
        </Link>

        <div className="text">
          <h3>SD M.2 2280 Gigabyte Aorus Gen4 1TB</h3>
          <p className="price">187,90€</p>
        </div>
      </div>
    </div>
    <div className="col-md-3 col-sm-6">
      <div className="product">
        <Link to="/detalhes/xxxyyyzzz">
          <img
            src="assets/img/produtos/1_335_2.jpg"
            alt=""
            className="img-fluid"
          />
        </Link>

        <div className="text">
          <h3>Subwoofer Edifier T5 70W Preto</h3>
          <p className="price">129,90€</p>
        </div>
      </div>
    </div>
  </div>
);

export default Recomendados;
