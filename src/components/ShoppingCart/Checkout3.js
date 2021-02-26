import React from "react";
import { Link, Redirect } from "react-router-dom";

class Checkout3 extends React.Component {
  // state keeps track of the touched state of form
  constructor(props) {
    super(props);
    this.state = { touched: false };
  }

  // redirects user if form values are valid
  // sets touched to true to show validation errors
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ touched: true });
    const showError = this.props.payment.method === "";
    if (!showError) {
      this.props.push("/carrinho/checkout4");
    }
  };

  render() {
    const showError = this.props.payment.method === "" && this.state.touched;

    // if the cart is empty user is redirected to shopping cart page
    if (this.props.cartIsEmpty) {
      return <Redirect to="/carrinho" />;
    }
    return (
      <div id="checkout" className="col-lg-9">
        <div className="box">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <h1>Checkout - Método de pagamento</h1>
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
              <a className="nav-link flex-sm-fill text-sm-center active">
                <i className="fa fa-money"> </i>Método de pagamento
              </a>
              <a className="nav-link flex-sm-fill text-sm-center disabled">
                <i className="fa fa-eye"> </i>Revisão e confirmação
              </a>
            </div>
            <div className="content py-3">
              <div className="row">
                <div className="col-md-6">
                  <label style={{ display: "contents" }}>
                    <div className="box shipping-method">
                      <h4>Paypal</h4>
                      <div className="box-footer text-center">
                        <input
                          type="radio"
                          name="Paypal"
                          checked={this.props.payment.method === "Paypal"}
                          onChange={() => {
                            this.props.orderChange(
                              "Paypal",
                              "method",
                              "payment"
                            );
                            this.setState({ touched: true });
                          }}
                        />
                      </div>
                    </div>
                  </label>
                </div>
                <div className="col-md-6">
                  <label style={{ display: "contents" }}>
                    <div className="box shipping-method">
                      <h4>Multibanco</h4>
                      <div className="box-footer text-center">
                        <input
                          type="radio"
                          name="MB"
                          checked={this.props.payment.method === "MB"}
                          onChange={() => {
                            this.props.orderChange("MB", "method", "payment");
                            this.setState({ touched: true });
                          }}
                        />
                      </div>
                    </div>
                  </label>
                </div>
                <div className="col-md-6">
                  <label style={{ display: "contents" }}>
                    <div className="box shipping-method">
                      <h4>À cobrança</h4>
                      <div className="box-footer text-center">
                        <input
                          type="radio"
                          name="onDelivery"
                          checked={this.props.payment.method === "onDelivery"}
                          onChange={() => {
                            this.props.orderChange(
                              "onDelivery",
                              "method",
                              "payment"
                            );
                            this.setState({ touched: true });
                          }}
                        />
                      </div>
                    </div>
                  </label>
                </div>
                <div className={showError ? "col-md-12" : "d-none"}>
                  <div className="invalid-feedback">
                    Por favor selecione uma opção
                  </div>
                </div>
              </div>
            </div>
            <div className="box-footer d-flex justify-content-between">
              <Link
                to="/carrinho/checkout2"
                className="btn btn-outline-secondary"
              >
                <i className="fa fa-chevron-left"></i>Voltar para Método de
                envio
              </Link>
              <button className="btn btn-primary">
                Avançar para Revisão e confirmação
                <i className="fa fa-chevron-right"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Checkout3;
