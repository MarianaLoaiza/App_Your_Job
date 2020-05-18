import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";

class Searchbar extends Component {

  

  handleSelectChange = (evet) => {
    const { handlChange } = this.props;
    handlChange(evet.target.value);
  };

 

  render() {
    return (
      <main className="inner2">
        <div className="col-md-5 mb-3 col-sm-8">
          <h3 className="country text-center text-black-50">
            <strong>Busca aquí tu servicio</strong>
          </h3>
          <form onSubmit={this.handlSubmit}>
          <div className="row d-flex justify-content-center">
            <select
              className="custom-select col-8"
              id="country"
              required=""
              name="select-service"
              onChange={this.handleSelectChange}
            >
              <option value="">Seleccione...</option>
              <option value="plomeria">Plomeria</option>
              <option value="estetica">Estética</option>
              <option value="electrico">Eléctrico</option>
              <option value="gaseoducto">Mantenimiento de gaseoductos</option>
            </select>
        
          </div>
          </form>
        </div>
      </main>
    );
  }
}

export default Searchbar;
