import React, { Component } from "react";
import Loader from './Loader';

class Cargando extends Component{
    render(){
        return(
            <div className="PageLoading">
                
      <Loader />
    </div>
        )
    }
}

export default Cargando;