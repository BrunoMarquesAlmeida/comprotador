import { Accordion, Card } from "react-bootstrap";

const FAQ = () => {
  return (
    <div className="col-lg-9">
      <div id="contact" className="box">
        <h1>FAQ (Perguntas frequentes)</h1>
        <hr />
        <Accordion className="mb-3" defaultActiveKey="0">
          <Card className="card border-primary">
            <Accordion.Toggle
              as={Card.Header}
              eventKey="0"
              className="btn btn-primary d-block text-left rounded-0 border-0"
              style={{ backgroundColor: "#3eaa94" }}
            >
              1. O que é que eu faço se a minha encomenda não chegar?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum tortor quam,
                  feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                  libero sit amet quam egestas semper. Aenean ultricies mi vitae
                  est. Mauris placerat eleifend leo.
                </p>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </li>
                  <li>Aliquam tincidunt mauris eu risus.</li>
                  <li>Vestibulum auctor dapibus neque.</li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion className="mb-3">
          <Card className="card border-primary">
            <Accordion.Toggle
              as={Card.Header}
              eventKey="0"
              className="btn btn-primary d-block text-left rounded-0 border-0"
              style={{ backgroundColor: "#3eaa94" }}
            >
              2. O que são os custos de envio?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion className="mb-3">
          <Card className="card border-primary">
            <Accordion.Toggle
              as={Card.Header}
              eventKey="0"
              className="btn btn-primary d-block text-left rounded-0 border-0"
              style={{ backgroundColor: "#3eaa94" }}
            >
              3. Envia para o estrangeiro?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
