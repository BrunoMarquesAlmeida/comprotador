import formatPrice from "../Common/formatPrice";

const OrderSummary = (props) => {
  const { subTotal, shipCosts } = props;
  return (
    <div id="order-summary" className="box">
      <div className="box-header">
        <h3 className="mb-0">Resumo</h3>
      </div>
      <div className="table-responsive">
        <table className="table">
          <tbody>
            <tr>
              <td>Subtotal</td>
              <th>{formatPrice(subTotal)}€</th>
            </tr>
            <tr>
              <td>Custos de envio</td>
              <th>{formatPrice(shipCosts.toString())}€</th>
            </tr>
            <tr className="total">
              <td>Total</td>
              <th>
                {formatPrice((parseFloat(subTotal) + shipCosts).toFixed(2))}€
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderSummary;
