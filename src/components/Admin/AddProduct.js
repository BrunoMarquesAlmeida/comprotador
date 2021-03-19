import React from "react";
import { Form, Field } from "react-final-form";

import Categorias from "../../categorias";
import { catSpecs } from "../Category/MenuFilters";

class AddProduct extends React.Component {
  // keeps track of what categories are selected
  constructor(props) {
    super(props);
    this.state = {
      selectedCat: null,
      selectedSubCat: null,
      selectedSubCat2: null,
    };
  }

  renderCatOptions() {
    return Object.keys(Categorias).map((Cat) => (
      <option key={Cat}>{Cat}</option>
    ));
  }

  renderSubCatOptions() {
    const { selectedCat } = this.state;

    if (selectedCat) {
      return Object.keys(Categorias[selectedCat]).map((subCat) => (
        <option key={subCat}>{subCat}</option>
      ));
    }
  }

  renderSubCat2Options() {
    const { selectedCat, selectedSubCat } = this.state;

    if (selectedCat && selectedSubCat) {
      return Categorias[selectedCat][selectedSubCat].map((subCat) => (
        <option key={subCat}>{subCat}</option>
      ));
    }
  }

  // handles category select changes
  handleSelectChange({ target }, cat) {
    const catWasDeselected = cat === "selectedCat" && target.value === "";

    if (catWasDeselected) {
      this.setState({
        selectedCat: null,
        selectedSubCat: null,
        selectedSubCat2: null,
      });
    } else {
      this.setState({
        [cat]: target.value,
      });
    }
  }

  // renders Technical according to catSpecs which is imported from another document
  renderCatSpecs() {
    const { selectedCat, selectedSubCat } = this.state;

    if (selectedSubCat) {
      const numberOfRows = Math.ceil(
        catSpecs[selectedCat][selectedSubCat].length / 2
      );
      let rows = [];
      let currentSpec = 0;

      for (let i = 1; i <= numberOfRows; i++) {
        const leftSpec = catSpecs[selectedCat][selectedSubCat][currentSpec];
        const rightSpec =
          catSpecs[selectedCat][selectedSubCat][currentSpec + 1];
        let rowJSX;

        if (rightSpec) {
          rowJSX = (
            <div className="row" key={i}>
              <div className="col-md-6">
                <div className="form-group">
                  <label>{leftSpec}</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>{rightSpec}</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
          );
        } else {
          rowJSX = (
            <div className="row" key={i}>
              <div className="col-md-12">
                <div className="form-group">
                  <label>{leftSpec}</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
          );
        }

        rows.push(rowJSX);

        currentSpec += 2;
      }

      return rows;
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="col-lg-9">
        <div className="box">
          <h1>Adicionar produto</h1>
          <p className="lead">Adicione produtos à base de dados do site.</p>
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Título</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Preço PVPR</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Preço desconto</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label>Categoria</label>
                  <select
                    className="form-control"
                    onChange={(e) => this.handleSelectChange(e, "selectedCat")}
                  >
                    <option />
                    {this.renderCatOptions()}
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Sub-Categoria</label>
                  <select
                    className="form-control"
                    onChange={(e) =>
                      this.handleSelectChange(e, "selectedSubCat")
                    }
                  >
                    <option></option>
                    {this.renderSubCatOptions()}
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Sub-Categoria 2</label>
                  <select
                    className="form-control"
                    onChange={(e) =>
                      this.handleSelectChange(e, "selectedSubCat2")
                    }
                  >
                    <option></option>
                    {this.renderSubCat2Options()}
                  </select>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-12">
                <h4>Especificações técnicas</h4>
              </div>
            </div>
            {this.state.selectedSubCat
              ? this.renderCatSpecs()
              : "Por favor selecione uma Sub-Categoria em cima"}
            <hr />
            <div className="row">
              <div className="col-md-12">
                <h4>Descrição</h4>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddProduct;
