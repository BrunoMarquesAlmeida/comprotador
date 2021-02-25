import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Form, Field } from "react-final-form";

class Checkout1 extends React.Component {
  // renders form text inputs
  renderInput(label, id) {
    const checkoutStep = "address";
    return (
      <Field name={id}>
        {({ meta, input }) => (
          <div className="form-group">
            <label>{label}</label>
            <input
              {...input}
              id={id}
              type="text"
              className="form-control"
              // this onChange overrides react-final-form default onChange where we call for a state udpate
              // and execute the default onChange
              onChange={(e) => {
                this.props.orderChange(e.target.value, id, checkoutStep);
                input.onChange(e);
              }}
            />

            {
              // display validation errors
              meta.error && meta.touched && (
                <div className="invalid-feedback">{meta.error}</div>
              )
            }
          </div>
        )}
      </Field>
    );
  }

  render() {
    // if the cart is empty user is redirected to shopping cart page
    if (this.props.cartIsEmpty) {
      return <Redirect to="/carrinho" />;
    }
    return (
      <div id="checkout" className="col-lg-9">
        <div className="box">
          <Form
            onSubmit={() => this.props.push("/carrinho/checkout2")}
            validate={validate}
            initialValues={{ ...this.props.address }}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <h1>Checkout - Endereço</h1>
                <div className="nav flex-column flex-md-row nav-pills text-center">
                  <a className="nav-link flex-sm-fill text-sm-center active">
                    <i className="fa fa-map-marker"> </i>Endereço
                  </a>
                  <a className="nav-link flex-sm-fill text-sm-center disabled">
                    <i className="fa fa-truck"> </i>Método de Envio
                  </a>
                  <a className="nav-link flex-sm-fill text-sm-center disabled">
                    <i className="fa fa-money"> </i>Método de pagamento
                  </a>
                  <a className="nav-link flex-sm-fill text-sm-center disabled">
                    <i className="fa fa-eye"> </i>Revisão e confirmação
                  </a>
                </div>
                <div className="content py-3">
                  <div className="row">
                    <div className="col-md-6">
                      {this.renderInput("Primeiro nome", "firstName")}
                    </div>
                    <div className="col-md-6">
                      {this.renderInput("Último nome", "lastName")}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      {this.renderInput("Morada", "street")}
                    </div>
                    <div className="col-md-6 col-lg-3">
                      {this.renderInput("Código postal", "zip")}
                    </div>
                    <div className="col-md-6 col-lg-3">
                      {this.renderInput("Cidade", "city")}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      {this.renderInput("Email", "email")}
                    </div>
                    <div className="col-md-6 col-lg-3">
                      {this.renderInput("Contacto telefónico", "phone")}
                    </div>
                    <div className="col-md-6 col-lg-3">
                      {this.renderInput("NIF", "NIF")}
                    </div>
                  </div>
                </div>
                <div className="box-footer d-flex justify-content-between">
                  <Link to="/carrinho" className="btn btn-outline-secondary">
                    <i className="fa fa-chevron-left fa-icon"></i>Voltar para o
                    carrinho
                  </Link>
                  <button className="btn btn-primary">
                    Avançar para Método de envio
                    <i className="fa fa-chevron-right fa-icon"></i>
                  </button>
                </div>
              </form>
            )}
          />
        </div>
      </div>
    );
  }
}

// validates form values
const validate = function (values) {
  const errors = {};

  // REGEX for email validation
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!values.firstName) {
    errors.firstName = "Por favor preencha este campo";
  }

  if (!values.lastName) {
    errors.lastName = "Por favor preencha este campo";
  }

  if (!values.street) {
    errors.street = "Por favor preencha este campo";
  }

  if (!values.zip) {
    errors.zip = "Por favor preencha este campo";
  }

  if (!values.city) {
    errors.city = "Por favor preencha este campo";
  }

  if (values.phone) {
    if (values.phone.toString().length !== 9) {
      errors.phone = "Contacto deve conter 9 dígitos";
    }
  }
  if (isNaN(values.phone)) {
    errors.phone = "Por favor introduza um número";
  }
  if (!values.phone) {
    errors.phone = "Por favor preencha este campo";
  }

  if (values.NIF) {
    if (values.NIF.toString().length !== 9) {
      errors.NIF = "NIF deve conter 9 dígitos";
    }
  }
  if (isNaN(values.NIF)) {
    errors.NIF = "Por favor introduza um número";
  }

  if (!re.test(String(values.email).toLowerCase())) {
    errors.email = "Email inválido";
  }
  if (!values.email) {
    errors.email = "Por favor preencha este campo";
  }

  return errors;
};

export default Checkout1;
