const OrderSummary = () => {
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
              <th>1 005,70€</th>
            </tr>
            <tr>
              <td>Custos de envio</td>
              <th>10,00€</th>
            </tr>
            <tr className="total">
              <td>Total</td>
              <th>1 015,70€</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderSummary;
