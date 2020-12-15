import { Link } from "react-router-dom";

const EncomendaDetalhes = () => {
  return (
    <div id="customer-order" className="col-lg-9">
      <div className="box">
        <h1>Encomenda #1375</h1>
        <p className="lead">
          A encomenda #1375 foi feita em <strong>22/06/2013</strong> e está
          neste momento
          <strong> Em preparação</strong>.
        </p>
        <p className="text-muted">
          Se tiver alguma questão não hesite em nos
          <Link to="/contactos"> contactar</Link>. O nosso serviço de apoio ao
          cliente está aqui para o ajudar.
        </p>
        <hr></hr>
        <div className="table-responsive mb-4">
          <table className="table">
            <thead>
              <tr>
                <th colspan="2">Produto</th>
                <th>Quantidade</th>
                <th>Preço</th>
                <th>Desconto</th>
                <th>Total</th>
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
                <th colspan="5" className="text-right">
                  Subtotal
                </th>
                <th>1 005,70€</th>
              </tr>
              <tr>
                <th colspan="5" className="text-right">
                  Custos de envio
                </th>
                <th>10,00€</th>
              </tr>

              <tr>
                <th colspan="5" className="text-right">
                  Total
                </th>
                <th>1 015,70€</th>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="row addresses">
          <div className="col-lg-6">
            <h2>Endereço de faturação</h2>
            <p>
              João Teixeira
              <br />
              Avenida João Crisóstomo 24
              <br />
              Lisboa
              <br />
              1070-011
            </p>
          </div>
          <div className="col-lg-6">
            <h2>Endereço de envio</h2>
            <p>
              João Teixeira
              <br />
              Avenida João Crisóstomo 24
              <br />
              Lisboa
              <br />
              1070-011
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EncomendaDetalhes;
