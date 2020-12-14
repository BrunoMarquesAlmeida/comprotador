import { Link } from "react-router-dom";

const Encomendas = () => {
  return (
    <div className="box">
      <h1>Encomendas</h1>
      <p className="lead">Histórico completo.</p>
      <p className="text-muted">
        Se tiver alguma questão não hesite em nos
        <Link to="/contactos"> contactar</Link>. O nosso serviço de apoio ao
        cliente está aqui para o ajudar.
      </p>
      <hr />
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Encomenda</th>
              <th>Data</th>
              <th>Total</th>
              <th>Estado</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th># 1735</th>
              <td>22/06/2013</td>
              <td>$ 150.00</td>
              <td>
                <span className="badge badge-info">Being prepared</span>
              </td>
              <td>
                <a
                  href="customer-order.html"
                  className="btn btn-primary btn-sm"
                >
                  View
                </a>
              </td>
            </tr>
            <tr>
              <th># 1735</th>
              <td>22/06/2013</td>
              <td>$ 150.00</td>
              <td>
                <span className="badge badge-info">Being prepared</span>
              </td>
              <td>
                <a
                  href="customer-order.html"
                  className="btn btn-primary btn-sm"
                >
                  View
                </a>
              </td>
            </tr>
            <tr>
              <th># 1735</th>
              <td>22/06/2013</td>
              <td>$ 150.00</td>
              <td>
                <span className="badge badge-success">Received</span>
              </td>
              <td>
                <a
                  href="customer-order.html"
                  className="btn btn-primary btn-sm"
                >
                  View
                </a>
              </td>
            </tr>
            <tr>
              <th># 1735</th>
              <td>22/06/2013</td>
              <td>$ 150.00</td>
              <td>
                <span className="badge badge-danger">Cancelled</span>
              </td>
              <td>
                <a
                  href="customer-order.html"
                  className="btn btn-primary btn-sm"
                >
                  View
                </a>
              </td>
            </tr>
            <tr>
              <th># 1735</th>
              <td>22/06/2013</td>
              <td>$ 150.00</td>
              <td>
                <span className="badge badge-warning">On hold</span>
              </td>
              <td>
                <a
                  href="customer-order.html"
                  className="btn btn-primary btn-sm"
                >
                  View
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Encomendas;
