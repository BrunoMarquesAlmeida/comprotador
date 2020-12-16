import { Link } from "react-router-dom";

const Checkout4 = () => {
  return (
    <div id="checkout" className="col-lg-9">
      <div className="box">
        <form method="get" action="checkout4.html">
          <h1>Checkout - Revisão e confirmação</h1>
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
              to="/carrinho/checkout3"
              className="nav-link flex-sm-fill text-sm-center"
            >
              <i className="fa fa-money"> </i>Método de pagamento
            </Link>
            <Link className="nav-link flex-sm-fill text-sm-center active">
              <i className="fa fa-eye"> </i>Revisão e confirmação
            </Link>
          </div>
          <div className="content">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th colspan="2">Produto</th>
                    <th>Quantidade</th>
                    <th>Preço</th>
                    <th>Desconto</th>
                    <th colspan="2">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Link to="/detalhes/xxxyyyzzz">
                        <img
                          src="assets/img/produtos/1_332_17.jpg"
                          alt="Suporte p/ Headset Ozone Portal RGB Hub"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link to="/detalhes/xxxyyyzzz">
                        Suporte p/ Headset Ozone Portal RGB Hub
                      </Link>
                    </td>
                    <td>2</td>
                    <td>27,90€</td>
                    <td>0,00€</td>
                    <td>55,80€</td>
                  </tr>
                  <tr>
                    <td>
                      <Link to="/detalhes/xxxyyyzzz">
                        <img
                          src="assets/img/produtos/MSI156.jpg"
                          alt='Portátil MSI 15.6" GF63 Thin'
                        />
                      </Link>
                    </td>
                    <td>
                      <Link to="/detalhes/xxxyyyzzz">
                        Portátil MSI 15.6" GF63 Thin
                      </Link>
                    </td>
                    <td>1</td>
                    <td>949,90€</td>
                    <td>0,00€</td>
                    <td>949,90€</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th colspan="5">Total</th>
                    <th colspan="2">1 005,70€</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div className="box-footer d-flex justify-content-between">
            <Link
              to="/carrinho/checkout3"
              className="btn btn-outline-secondary"
            >
              <i className="fa fa-chevron-left"></i>Voltar para Método de
              pagamento
            </Link>
            <Link to="/carrinho/checkout4" className="btn btn-primary">
              Confirmar encomenda
              <i className="fa fa-chevron-right"></i>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout4;
