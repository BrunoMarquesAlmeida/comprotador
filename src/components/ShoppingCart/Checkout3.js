import { Link } from "react-router-dom";

const Checkout3 = () => {
  return (
    <div id="checkout" className="col-lg-9">
      <div className="box">
        <form method="get" action="checkout4.html">
          <h1>Checkout - Método de pagamento</h1>
          <div className="nav flex-column flex-sm-row nav-pills">
            <Link
              to="/carrinho/checkout1"
              className="nav-link flex-sm-fill text-sm-center"
            >
              <i className="fa fa-map-marker"> </i>Endereço
            </Link>
            <Link
              to="/carrinho/checkout2"
              className="nav-link flex-sm-fill text-sm-center"
            >
              <i className="fa fa-truck"> </i>Método de envio
            </Link>
            <Link
              href="#"
              className="nav-link flex-sm-fill text-sm-center active"
            >
              <i className="fa fa-money"> </i>Método de pagamento
            </Link>
            <Link
              href="#"
              className="nav-link flex-sm-fill text-sm-center disabled"
            >
              <i className="fa fa-eye"> </i>Revisão e confirmação
            </Link>
          </div>
          <div className="content py-3">
            <div className="row">
              <div className="col-md-6">
                <label style={{ display: "contents" }}>
                  <div className="box shipping-method">
                    <h4>Paypal</h4>
                    <div className="box-footer text-center">
                      <input type="radio" name="delivery" value="delivery1" />
                    </div>
                  </div>
                </label>
              </div>
              <div className="col-md-6">
                <label style={{ display: "contents" }}>
                  <div className="box shipping-method">
                    <h4>Multibanco</h4>
                    <div className="box-footer text-center">
                      <input type="radio" name="delivery" value="delivery2" />
                    </div>
                  </div>
                </label>
              </div>
              <div className="col-md-6">
                <label style={{ display: "contents" }}>
                  <div className="box shipping-method">
                    <h4>À cobrança</h4>
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
              to="/carrinho/checkout2"
              className="btn btn-outline-secondary"
            >
              <i className="fa fa-chevron-left"></i>Voltar para Método de envio
            </Link>
            <Link to="/carrinho/checkout4" className="btn btn-primary">
              Avançar para Revisão e confirmação
              <i className="fa fa-chevron-right"></i>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout3;
