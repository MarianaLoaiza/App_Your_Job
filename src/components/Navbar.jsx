import React, { Component } from 'react'
import Logo from '../images/logo.png'
import './App.css';
import { Link } from 'react-router-dom';




function Navbar() {

    return (
        <div className="navbar shadow-sm mb-auto text-center aling-items-center">
            <div className="row w-100 justify-content-center ">
                <div className="navbar-logo col-xl-6 col-lg-6  col-md-6 col-12">
                    <img className="img-profile" width="150" height="150" src={Logo} alt="Responsive-image" />
                   
                </div>
                <div className="navbar-sec col-xl-6 col-lg-6 col-md-6 col-12 aling-items-center mt-5 mb-2">
                <nav>
                    <Link to="/home">
                    <a className="p-2 text-info" href="#" aria-disabled="true"> <strong className="navname text-info">Inicio</strong></a>
                    </Link>
                    <Link to="/resh">
                    <a className="p-2 text-info" href="#" aria-disabled="true"><strong className="navname text-info">SerWorker</strong></a>
                    </Link>
                    <Link to="/loginh">
                    <a className="p-2 text-info" href="#" aria-disabled="true"><strong className="navname text-info">Iniciar Sesión</strong></a>
                    </Link>
                </nav>
                </div>
            </div>
        </div>
    );
}



export default Navbar;


