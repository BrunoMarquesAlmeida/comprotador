const Detail = () => {
  return (
    <div className="col-lg-9">
      <div className="box">
        <h1>Detalhes</h1>
        <p className="lead">Controle aqui a sua informação pessoal.</p>
        <form>
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
          <div className="row">
            <div className="col-md-12 text-center">
              <button type="submit" className="btn btn-primary">
                <i className="fa fa-save"></i> Guardar alterações
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Detail;
