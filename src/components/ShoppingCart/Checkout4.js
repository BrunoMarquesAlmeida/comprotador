import React from "react";
import { Link, Redirect } from "react-router-dom";

import formatPrice from "../Common/formatPrice";

class Checkout4 extends React.Component {
  handleSubmit(e, totals) {
    e.preventDefault();
    this.props.orderPlace(totals, this.props.push);
  }

  renderShoppingCart = () => {
    const { shoppingCart } = this.props;
    if (shoppingCart !== undefined) {
      return Object.values(shoppingCart).map(
        ({ title, image, preco, quantidade, _id }) => {
          const total = preco * quantidade;
          return (
            <tr key={_id}>
              <td>
                <Link to={`/detalhes/${_id}`}>
                  <img src={image} alt={title} />
                </Link>
              </td>
              <td>
                <Link to={`/detalhes/${_id}`}>{title}</Link>
              </td>
              <td>{quantidade}</td>
              <td>{formatPrice(preco)}€</td>
              <td>0.00€</td>
              <td>{formatPrice(total.toFixed(2))}€</td>
            </tr>
          );
        }
      );
    }
  };

  render() {
    const { totalPrice, deliveryCost, total } = this.props;
    const totals = {
      subTotal: totalPrice,
      deliveryCost: parseFloat(deliveryCost).toFixed(2),
      total: parseFloat(total).toFixed(2),
    };

    if (this.props.cartIsEmpty) {
      return <Redirect to="/carrinho" />;
    }
    return (
      <div id="checkout" className="col-lg-9">
        <div className="box">
          <form onSubmit={(e) => this.handleSubmit(e, totals)}>
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
              <a className="nav-link flex-sm-fill text-sm-center active">
                <i className="fa fa-eye"> </i>Revisão e confirmação
              </a>
            </div>
            <div className="content">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th colSpan="2">Produto</th>
                      <th>Quantidade</th>
                      <th>Preço</th>
                      <th>Desconto</th>
                      <th colSpan="2">Total</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderShoppingCart()}</tbody>
                  <tfoot>
                    <tr>
                      <th colSpan="5">Total</th>
                      <th colSpan="2">{formatPrice(this.props.totalPrice)}€</th>
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
              <button className="btn btn-primary">
                Confirmar encomenda
                <i className="fa fa-chevron-right"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Checkout4;
