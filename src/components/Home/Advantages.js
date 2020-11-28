const Advantages = () => {
  return (
    <div id="advantages">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="box clickable d-flex flex-column justify-content-center mb-0 h-100">
              <div className="icon">
                <i class="fa fa-truck fa-flip-horizontal"></i>
              </div>
              <h3 className="advantagesA">entregas em 24h</h3>
              <p className="mb-0">
                Tempo médio em dias úteis para Portugal Continental
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box clickable d-flex flex-column justify-content-center mb-0 h-100">
              <div className="icon">
                <i className="fa fa-shopping-bag"></i>
              </div>
              <h3 className="advantagesA">levante na loja</h3>
              <p className="mb-0">
                Compre online e levante a sua encomenda numa loja ComproTador.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box clickable d-flex flex-column justify-content-center mb-0 h-100">
              <div className="advantagesIcon icon">
                <i className="fa fa-dollar"></i>
              </div>
              <h3 className="advantagesA">Portes grátis</h3>
              <p className="mb-0">
                Em compras superiores a 200€ para Portugal Continental
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
