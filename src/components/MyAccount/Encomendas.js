import { Link } from "react-router-dom";

import formatPrice from "../Common/formatPrice";

const Encomendas = (props) => {
  return (
    <div className="col-lg-9">
      <div className="box">
        <h1>Encomendas</h1>
        <p className="lead">Histórico completo</p>
        <p className="text-muted">
          Se tiver alguma questão não hesite em nos
          <Link to="/info/contctos"> contactar</Link>. O nosso serviço de apoio
          ao cliente está aqui para o ajudar.
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
              {renderOrderList(props.orders)}
              {/* 
                  <span className="badge badge-success">Recebida</span>
               
                  <span className="badge badge-danger">Cancelada</span>
                
                  <span className="badge badge-warning">Em espera</span>
                */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const renderOrderList = function (orders) {
  return orders.map(({ _id, totals, status, date }) => {
    return (
      <tr key={_id}>
        <th>ID: {_id}</th>
        <td>{date.short}</td>
        <td>{formatPrice(totals.total)}€</td>
        <td>
          <span className="badge badge-info">{status}</span>
        </td>
        <td>
          <Link
            to={`/conta/encomendas/${_id}`}
            className="btn btn-primary btn-sm"
          >
            View
          </Link>
        </td>
      </tr>
    );
  });
};

export default Encomendas;
