import React from "react";
import { Link } from "react-router-dom";

import Recomendados from "../Common/Recomendados";
import formatPrice from "../Common/formatPrice";

class Basket extends React.Component {
  // maps items added to Shopping Cart and builds list of products
  renderShoppingCart() {
    const { shoppingCart, removeFromCart } = this.props;
    if (shoppingCart !== undefined) {
      return Object.values(shoppingCart).map(
        ({ title, image, preco, quantidade, id }) => {
          const total = preco * quantidade;
          return (
            <tr key={id}>
              <td>
                <Link to={`/detalhes/${id}`}>
                  <img src={image} alt={title} />
                </Link>
              </td>
              <td>
                <Link to={`/detalhes/${id}`}>{title}</Link>
              </td>
              <td>
                <input
                  type="number"
                  value={quantidade}
                  className="form-control"
                  onChange={(e) => this.handleAmountChange(e, id)}
                  style={{ width: "70px" }}
                />
              </td>
              <td>{formatPrice(preco)}€</td>
              <td>0.00€</td>
              <td>{formatPrice(total.toFixed(2))}€</td>
              <td>
                <span
                  onClick={() => removeFromCart(id)}
                  style={{ color: "#3eaa94" }}
                  className="navMenuBtn"
                >
                  <i className="fa fa-trash-o"></i>
                </span>
              </td>
            </tr>
          );
        }
      );
    }
  }

  // handles the change of quantity of a specific cart item by calling the changeItemAmount() Redux action
  handleAmountChange(e, id) {
    const amount = e.target.value;

    if (amount > 0) {
      this.props.changeItemAmount(id, amount);
    }
  }

  renderContinueBtn() {
    const cartNotEmpty = Object.keys(this.props.shoppingCart).length > 0;
    if (cartNotEmpty) {
      return (
        <Link to="/carrinho/checkout1">
          <button className="btn btn-primary">
            Confirmar compra
            <i className="fa fa-chevron-right fa-icon"></i>
          </button>
        </Link>
      );
    }
    return (
      <span>
        <button
          className="btn btn-primary disabled"
          onClick={(e) => e.preventDefault()}
        >
          Confirmar compra
          <i className="fa fa-chevron-right fa-icon"></i>
        </button>
      </span>
    );
  }

  render() {
    const itemAmount = Object.keys(this.props.shoppingCart).length;
    return (
      <div id="basket" className="col-lg-9">
        <div className="box">
          <form method="post" action="checkout1.html">
            <h1>Carrinho de compras</h1>
            <p className="text-muted">
              De momento tem {itemAmount} itens no carrinho.
            </p>
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
            <div className="box-footer d-flex justify-content-between flex-column flex-lg-row">
              <div className="left">
                <button
                  className="btn btn-outline-secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.goBack();
                  }}
                >
                  <i className="fa fa-chevron-left"></i> Continuar a comprar
                </button>
              </div>
              <div className="right">
                {this.renderContinueBtn()}
                {/* <span className="btn btn-outline-secondary">
                <i className="fa fa-refresh"></i> Atualizar carrinho
              </span> */}
              </div>
            </div>
          </form>
        </div>
        <Recomendados />
      </div>
    );
  }
}

export default Basket;
