import React, { useState } from "react";
import { Collapse } from "react-bootstrap";

const MenuFilters = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="col-lg-3">
      <div className="card sidebar-menu mb-4">
        <div className="card-header" onClick={() => setOpen(!open)}>
          <h3 className="h4 card-title">
            Núcleos
            <button className="btn btn-sm btn-danger pull-right">
              <i className="fa fa-times-circle"></i> Limpar
            </button>
          </h3>
        </div>

        <Collapse in={open}>
          <div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> 2 (Dual-Core) (10)
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> 4 (Qual-Core) (12)
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> 8 (Eight-Core) (15)
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> 12 (Twelve-Core) (14)
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> 16 (Sixteen-Core) (14)
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> 24 (Twenty Four-Core) (14)
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> 32 (Thirty Two-Core) (14)
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> 64 (Sixty Four-Core) (14)
                    </label>
                  </div>
                </div>
                <button className="btn btn-default btn-sm btn-primary">
                  <i className="fa fa-pencil"></i> Apply
                </button>
              </form>
            </div>
          </div>
        </Collapse>
      </div>
      <div className="card sidebar-menu mb-4">
        <div className="card-header">
          <h3 className="h4 card-title">
            Brands
            <button className="btn btn-sm btn-danger pull-right">
              <i className="fa fa-times-circle"></i> Clear
            </button>
          </h3>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> Armani (10)
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> Versace (12)
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> Carlo Bruni (15)
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> Jack Honey (14)
                </label>
              </div>
            </div>
            <button className="btn btn-default btn-sm btn-primary">
              <i className="fa fa-pencil"></i> Apply
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MenuFilters;
