import React from "react";
import emailjs from 'emailjs-com';
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';



class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

 
  }
  _Alerta() {
    Swal.fire(
      "Para continuar tu solicitud inicia sesión 😃",
      "You clicked the button",
      
    );
  }


  onClick = () =>{
    this._Alerta()
    var template_params = {
      "to_email": this.props.email,
      "from_name": this.props.fullName,
      }

      emailjs.send('gmail','template_bYg9fKfE' , template_params,'user_xD9elWf14F7djoaxBeUmk' )
      .then((response) => { 
      console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
      console.log('FAILED...', err);

     
  });

  console.log("fjvei")

  }
  
  render() {
    return (
      <div className="mb-5 text-center mt-5">
        
        <Link to="/loginh">
        <button
                
                onClick={this.onClick}
                className="btn btn-info  mr-1"
                type="submit"
              >
                 Solicitar Servicio
        </button>
        </Link>
      </div>
    );
  }
}

export default Reservation;
