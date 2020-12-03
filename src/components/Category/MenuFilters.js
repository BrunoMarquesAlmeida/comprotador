import React, { useContext } from "react";
import { Accordion, Card } from "react-bootstrap";
import AccordionContext from "react-bootstrap/AccordionContext";

import Produtos from "../../produtos";

const MenuFilters = () => {
  const { specs } = Produtos.categorias.Computadores.subCategorias.Desktops[0];
  return (
    <div className="col-lg-3">
      {Object.keys(specs).map((spec) => {
        return (
          <Accordion key={spec}>
            <Card className="card sidebar-menu mb-4">
              <Accordion.Toggle
                as={Card.Header}
                eventKey={spec}
                className="card-header pointer"
              >
                <h3 className="h4 card-title">
                  {spec}

                  <> </>
                  <ContextAwareToggle eventKey={spec}></ContextAwareToggle>
                  <button
                    className="btn btn-sm btn-danger pull-right"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <i className="fa fa-times-circle"></i> Limpar
                  </button>
                </h3>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={spec}>
                <div id={spec}>
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        {Object.values(specs[spec]).map((check) => {
                          return (
                            <div className="checkbox">
                              <label>
                                <input type="checkbox" /> {check}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                      <button className="btn btn-default btn-sm btn-primary">
                        <i className="fa fa-pencil"></i> Apply
                      </button>
                    </form>
                  </div>
                </div>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        );
      })}
    </div>
  );
};

function ContextAwareToggle({ eventKey }) {
  const currentEventKey = useContext(AccordionContext);

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <i
      className={isCurrentEventKey ? "fa fa-caret-up" : "fa fa-caret-down"}
    ></i>
  );
}

export default MenuFilters;
