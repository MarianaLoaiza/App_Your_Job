import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";


class Searchbar extends Component {
  render() {
    return (

      <>
       <main className="inner">
        <div className="container-description py-5">
          <h1 className=" container text-center text-black-50 py-5">
            YourJob 
          </h1>
          <h3 className=" container text-center text-black-50 py-5">
            Conéctate con tú Worker favorito
          </h3>
          <h4 className="country text-center text-black-50 mb-5 ">
            A un solo Click!
          </h4>
          <Link to="/showcard" className="text-decoration-none">
            <button className="btn btn-dark  px-2  d-block m-auto " type="submit">
              Conectar
        </button>
          </Link>
        </div>
      </main>
      </>
    );
  }
}

export default Searchbar;

