import React, { Component } from "react";
import "./App.css";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null,
      form: {
        photoProfile: "",
        serviceType: "",
        fullName: "",
        email: "",
        about: "",
        rate: "",
        ranking: "",
        skills1: "",
        skills2:"",
        sikills3: "",
        experience1: "",
        experience2: "",
        experience3: "",
      },
    };
    
  }

  _Alerta() {
    Swal.fire(
      "Su registro ha sido exitoso, para YourJob es un gusto trabajar contigo!😃",
      "You clicked the button",
      "success"
    );
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    console.log(value);
    const name = target.name;

    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        [name]: value,
      },
    });
  };

  
  handleSubmit = (e) => {
    e.preventDefault();
    const data = this.state.form;
    axios
      .post("https://your-job.now.sh/worker", data)
      .then((Cv) => {
        this.setState({
          loading: false,
        });
        this.props.history.push("/home");
      })
      .catch((error) => {
        this.setState({
          loading: false,
          error: error,
        });
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-signin mt-5 mb-5">
        <div className="text-center">
          <h1 className="h3 mb-3 font-weight-normal text-info font-weight-bold">
            Ser Worker
          </h1>
          <p>Registra los siguientes datos para ser parte de nuestro equipo </p>
          <p className="text-center">
            Los campos maracados con <span class="obligate text-info">*</span>{" "}
            son obligatorios
          </p>
        </div>

        <div className="mx-auto col-6">
          <label htmlFor="fullName">
            Nombre completo: <span class="obligate text-primary">*</span>
          </label>
          <input
            onChange={this.handleChange}
            type="text"
            className="form-control"
            id="fullName"
            placeholder="Ingrese su nombre completo"
            required=""
            name="fullName"
            value={this.state.fullName}
          />
        </div>

        <div className="mx-auto col-6 mt-4">
          <label htmlFor="email">
            Email: <span class="obligate text-primary">*</span>
          </label>
          <input
            onChange={this.handleChange}
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="you@example.com"
            value={this.state.email}
          />
        </div>

        <div className="mx-auto col-6 mt-4">
          <label htmlFor="cellphone">
            Teléfono de Contacto: <span class="obligate text-primary">*</span>
          </label>
          <input
            onChange={this.handleChange}
            type="number"
            className="form-control"
            id="cellphone"
            pattern="[0-12]"
            name="cellphone"
            placeholder="Ingrese su número de contacto"
            value={this.state.cellphone}
          />
        </div>

        <div className="mx-auto col-6 mt-4">
          <label htmlFor="about">
            Descripción: <span class="obligate text-primary">*</span>
          </label>
          <textarea
            onChange={this.handleChange}
            id="about"
            className="input-textarea col-12 d-block"
            name="about"
            placeholder="Ingrese su descripción aquí"
            value={this.state.about}
          ></textarea>
        </div>

        <div className="mx-auto col-6 mt-4">
          <label htmlFor="state">
            Tipo de servicio que presta{" "}
            <span class="obligate text-primary">*</span>
          </label>
          <select
            className="custom-select"
            id="serviceType"
            required=""
            name="serviceType"
            onChange={this.handleChange}
          >
            <option value="">Seleccione...</option>
            <option value="plomeria">Plomeria</option>
            <option value="estetica">Estética</option>
            <option value="electrico">Eléctrico</option>
            <option value="gaseoducto">Mantenimiento de gaseoductos</option>
          </select>
        </div>

        <div className="mx-auto col-6 mt-4">
          <label htmlFor="skills">
            Habilidades: <span class="obligate text-primary">*</span>
          </label>
          <ul class="list-group">
            <li class="list-group-item text-info">
              Habilidad
              <input
                onChange={this.handleChange}
                type="text"
                className="form-control"
                id="skills1"
                name="skills1"
                placeholder="Ingrese su habilidad aquí"
                required=""
                value={this.state.skills1}
              />
            </li>
            <li class="list-group-item text-info">
              Habilidad
              <input
                onChange={this.handleChange}
                type="text"
                className="form-control"
                id="skills2"
                name="skills2"
                placeholder="Ingrese su habilidad aquí"
                required=""
                value={this.state.skills2}
              />
            </li>
            <li class="list-group-item text-info">
              Habilidad
              <input
                onChange={this.handleChange}
                type="text"
                className="form-control"
                id="skills3"
                name="skills3"
                placeholder="Ingrese su habilidad aquí"
                required=""
                value={this.state.skills3}
              />
            </li>
          </ul>
        </div>

        <div className="mx-auto col-6 mt-4">
          <label htmlFor="experience">
            Eperiencia: <span class="obligate text-primary">*</span>
          </label>
          <ul class="list-group">
            <li class="list-group-item text-info">
              Año de experiencia
              <input
                onChange={this.handleChange}
                type="number"
                className="form-control"
                name="experience1"
                id="year"
                placeholder="Ingrese el año de la experiencia"
                required=""
                value={this.state.experience1}
              />
            </li>
            <li class="list-group-item text-info">
              Empresa
              <input
                onChange={this.handleChange}
                type="text"
                className="form-control"
                id="company"
                name="experience2"
                placeholder="Ingrese el año de la experiencia"
                required=""
                value={this.state.experience2}
              />
            </li>
            <li className="list-group-item text-info">
              Breve descripción
              <textarea
                 onChange={this.handleChange}
                id="description"
                className="input-textarea col-12 d-block"
                name="experience3"
                placeholder="Ingrese su descripción aquí"
                value={this.state.experience3}
              ></textarea>
            </li>
          </ul>
        </div>

        <div className="mx-auto col-6 mt-4">
          <label htmlFor="rate">
            Valor Hora de trabajo: <span class="obligate text-primary">*</span>
          </label>
          <input
            onChange={this.handleChange}
            type="number"
            className="form-control"
            id="rate"
            name="rate"
            pattern="[0-12]{12}"
            placeholder="$"
            value={this.state.rate}
          />
        </div>

        <div className="mx-auto col-6 col-ms-12 mt-5 text-center justify-content-center">
          <button
            onClick={this._Alerta}
            className="btn btn-info  mr-1"
            type="submit"
          >
            Registrar
          </button>
        </div>
        <p className="mt-5 mb-3 text-center text-info"> YourJob © 2020</p>
      </form>
    );
  }
}

export default withRouter(Register);
