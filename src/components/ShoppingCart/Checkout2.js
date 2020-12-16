import { Link } from "react-router-dom";

const Checkout2 = () => {
  return (
    <div id="checkout" className="col-lg-9">
      <div className="box">
        <form method="get" action="checkout3.html">
          <h1>Checkout - Método de envio</h1>
          <div className="nav flex-column flex-sm-row nav-pills">
            <Link
              to="/carrinho/checkout1"
              className="nav-link flex-sm-fill text-sm-center"
            >
              <i className="fa fa-map-marker"> </i>Endereço
            </Link>
            <a
              href="checkout2.html"
              className="nav-link flex-sm-fill text-sm-center active"
            >
              <i className="fa fa-truck"> </i>Método de envio
            </a>
            <a
              href="#"
              className="nav-link flex-sm-fill text-sm-center disabled"
            >
              <i className="fa fa-money"> </i>Método de pagamento
            </a>
            <a
              href="#"
              className="nav-link flex-sm-fill text-sm-center disabled"
            >
              <i className="fa fa-eye"> </i>Revisão e confirmação
            </a>
          </div>
          <div className="content py-3">
            <div className="row">
              <div className="col-md-6">
                <label style={{ display: "contents" }}>
                  <div className="box shipping-method">
                    <h4>CTT</h4>
                    <p>Envio normal.</p>
                    <div className="box-footer text-center">
                      <input type="radio" name="delivery" value="delivery1" />
                    </div>
                  </div>
                </label>
              </div>
              <div className="col-md-6">
                <label style={{ display: "contents" }}>
                  <div className="box shipping-method">
                    <h4>UPS</h4>
                    <p>Envio express.</p>
                    <div className="box-footer text-center">
                      <input type="radio" name="delivery" value="delivery2" />
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="box-footer d-flex justify-content-between">
            <Link
              to="/carrinho/checkout1"
              className="btn btn-outline-secondary"
            >
              <i className="fa fa-chevron-left"></i>Voltar para Endereço
            </Link>
            <Link to="/carrinho/checkout3" className="btn btn-primary">
              Avançar para Método de pagamento
              <i className="fa fa-chevron-right"></i>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout2;
