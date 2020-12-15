import { Link } from "react-router-dom";
import Recomendados from "../Common/Recomendados";

const Basket = () => {
  return (
    <div id="basket" className="col-lg-9">
      <div className="box">
        <form method="post" action="checkout1.html">
          <h1>Shopping cart</h1>
          <p className="text-muted">De momento tem 3 itens no seu carrinho.</p>
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
                  <td>
                    <input type="number" value="2" className="form-control" />
                  </td>
                  <td>27,90€</td>
                  <td>0,00€</td>
                  <td>55,80€</td>
                  <td>
                    <a href="#">
                      <i className="fa fa-trash-o"></i>
                    </a>
                  </td>
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
                  <td>
                    <input type="number" value="1" className="form-control" />
                  </td>
                  <td>949,90€</td>
                  <td>0,00€</td>
                  <td>949,90€</td>
                  <td>
                    <a href="#">
                      <i className="fa fa-trash-o"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th colspan="5">Total</th>
                  <th colspan="2">1005,70€</th>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="box-footer d-flex justify-content-between flex-column flex-lg-row">
            <div className="left">
              <a href="category.html" className="btn btn-outline-secondary">
                <i className="fa fa-chevron-left"></i> Continuar a comprar
              </a>
            </div>
            <div className="right">
              <button className="btn btn-outline-secondary">
                <i className="fa fa-refresh"></i> Atualizar carrinho
              </button>
              <button type="submit" className="btn btn-primary">
                Confirmar compra
                <i className="fa fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
      {Recomendados}
    </div>
  );
};

export default Basket;
