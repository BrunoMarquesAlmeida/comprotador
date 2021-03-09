import { Link } from "react-router-dom";
import _ from "lodash";

import formatPrice from "../Common/formatPrice";

const EncomendaDetalhes = (props) => {
  const orders = _.mapKeys(props.orders, "_id");

  //id passed through url
  const { id } = props.match.params;

  // filter orders by url id
  const selectedOrder = orders[id];
  const { _id, date, items, status, totals, address } = selectedOrder;

  return (
    <div id="customer-order" className="col-lg-9">
      <div className="box">
        <h1>Encomenda</h1>
        <p className="lead">
          A encomenda com <b>ID: {_id}</b> foi feita em{" "}
          <strong>{date.short}</strong> e está neste momento
          <strong> {status}</strong>.
        </p>
        <p className="text-muted">
          Se tiver alguma questão não hesite em nos
          <Link to="/info/contctos"> contactar</Link>. O nosso serviço de apoio
          ao cliente está aqui para o ajudar.
        </p>
        <hr></hr>
        <div className="table-responsive mb-4">
          <table className="table">
            <thead>
              <tr>
                <th colSpan="3">Produto</th>
                <th>Quantidade</th>
                <th>Preço</th>

                <th>Total</th>
              </tr>
            </thead>
            <tbody>{renderItemList(items)}</tbody>
            <tfoot>
              <tr>
                <th colSpan="5" className="text-right">
                  Subtotal
                </th>
                <th>{formatPrice(totals.subTotal)}€</th>
              </tr>
              <tr>
                <th colSpan="5" className="text-right">
                  Custos de envio
                </th>
                <th>{formatPrice(totals.deliveryCost)}€</th>
              </tr>

              <tr>
                <th colSpan="5" className="text-right">
                  Total
                </th>
                <th>{formatPrice(totals.total)}€</th>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="row addresses">
          <div className="col-lg-12">
            <h2>Endereço de envio</h2>
            <p>
              {address.firstName + " " + address.lastName}
              <br />
              {address.street}
              <br />
              {address.city}
              <br />
              {address.zip}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const renderItemList = function (items) {
  return Object.values(items).map(
    ({ _id, image, preco, quantidade, title }) => {
      const unitPrice = (parseFloat(preco) / parseFloat(quantidade)).toFixed(2);
      return (
        <tr key={_id}>
          <td colSpan="2">
            <Link to={`/detalhes/${_id}`}>
              <img src={image} alt={title} />
            </Link>
          </td>
          <td>
            <Link to={`/detalhes/${_id}`}>{title}</Link>
          </td>
          <td>{quantidade}</td>
          <td>{formatPrice(unitPrice)}€</td>

          <td>{formatPrice(preco)}€</td>
        </tr>
      );
    }
  );
};

export default EncomendaDetalhes;
