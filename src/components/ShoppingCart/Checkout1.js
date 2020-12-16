const Checkout1 = () => {
  return (
    <div id="checkout" className="col-lg-9">
      <div className="box">
        <form method="get" action="checkout2.html">
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
                <div className="form-group">
                  <label for="firstname">Primeiro nome</label>
                  <input id="firstname" type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="lastname">Último nome</label>
                  <input id="lastname" type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="company">Morada</label>
                  <input id="company" type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="form-group">
                  <label for="zip">Código postal</label>
                  <input id="zip" type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="form-group">
                  <label for="state">Cidade</label>
                  <input id="state" className="form-control" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="email">Email</label>
                  <input id="email" type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="form-group">
                  <label for="phone">Contacto telefónico</label>
                  <input id="phone" type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="form-group">
                  <label for="state">Número de contribuinte (NIF)</label>
                  <input id="state" className="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div className="box-footer d-flex justify-content-between">
            <span className="btn btn-outline-secondary">
              <i className="fa fa-chevron-left fa-icon"></i>Voltar para o
              carrinho
            </span>
            <span type="submit" className="btn btn-primary">
              Avançar para o método de envio
              <i className="fa fa-chevron-right fa-icon"></i>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout1;
