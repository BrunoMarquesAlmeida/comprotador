const Contactos = () => {
  return (
    <div className="col-lg-9">
      <div id="contact" className="box">
        <h1>Contact</h1>
        <p className="lead">
          Não hesite em nos contactar. O nosso serviço de apoio ao cliente está
          aqui para o ajudar.
        </p>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <h3>
              <i className="fa fa-map-marker"></i>Morada
            </h3>
            <p>
              R Conselheiro João Cunha 43
              <br />
              Viana Do Castelo
              <br />
              4900-558
              <br />
              <strong> Portugal</strong>
            </p>
          </div>

          <div className="col-md-4">
            <h3>
              <i className="fa fa-phone"></i> Telefone
            </h3>

            <p>
              <strong>+33 555 444 333</strong>
            </p>
          </div>

          <div className="col-md-4">
            <h3>
              <i className="fa fa-envelope"></i> Suporte eletrónico
            </h3>

            <ul>
              <li>
                <strong>
                  <a href="mailto:">info@fakeemail.com</a>
                </strong>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <iframe
          title="map"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDdWvu5ZnxK1duCfKn-_C_b05oabhQ7eC0&q=Viana+Castelo"
          width="100%"
          height="450"
          frameborder="0"
          style={{ border: "0" }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Contactos;
