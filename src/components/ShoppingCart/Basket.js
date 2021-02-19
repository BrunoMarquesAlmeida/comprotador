import React from "react";
import { Link } from "react-router-dom";
import Recomendados from "../Common/Recomendados";

class Basket extends React.Component {
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
                />
              </td>
              <td>{preco}€</td>
              <td>0,00€</td>
              <td>{total.toFixed(2)}€</td>
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

  handleAmountChange(e, id) {
    this.props.changeItemAmount(id, e.target.value);
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
                    <th colSpan="2">1 005,70€</th>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="box-footer d-flex justify-content-between flex-column flex-lg-row">
              <div className="left">
                <span
                  className="btn btn-outline-secondary"
                  onClick={() => this.props.goBack()}
                >
                  <i className="fa fa-chevron-left"></i> Continuar a comprar
                </span>
              </div>
              <div className="right">
                {/* <span className="btn btn-outline-secondary">
                <i className="fa fa-refresh"></i> Atualizar carrinho
              </span> */}
                <Link to="/carrinho/checkout1" className="btn btn-primary">
                  Confirmar compra
                  <i className="fa fa-chevron-right fa-icon"></i>
                </Link>
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
