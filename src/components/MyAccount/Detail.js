import React from "react";
import { Form, Field } from "react-final-form";

class Detail extends React.Component {
  renderInput(label, id) {
    return (
      <Field name={id}>
        {({ meta, input }) => (
          <div className="form-group">
            <label>{label}</label>
            <input {...input} id={id} type="text" className="form-control" />
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
    const { address } = this.props;

    return (
      <div className="col-lg-9">
        <div className="box">
          <h1>Detalhes</h1>
          <p className="lead">Controle aqui a sua informação pessoal.</p>
          <Form
            onSubmit={(values) => this.props.saveUserAddress(values)}
            initialValues={address}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
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
                <div className="row">
                  <div className="col-md-12 text-center">
                    <button className="btn btn-primary">
                      <i className="fa fa-save"></i> Guardar alterações
                    </button>
                  </div>
                </div>
              </form>
            )}
          />
        </div>
      </div>
    );
  }
}

export default Detail;
