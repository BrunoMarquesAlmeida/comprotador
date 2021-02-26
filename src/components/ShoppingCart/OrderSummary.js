import formatPrice from "../Common/formatPrice";

const OrderSummary = (props) => {
  const { subTotal, deliveryCost, total } = props;

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
              <th>{deliveryCost.toFixed(2)}€</th>
            </tr>
            <tr className="total">
              <td>Total</td>
              <th>{formatPrice(total.toFixed(2))}€</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderSummary;
