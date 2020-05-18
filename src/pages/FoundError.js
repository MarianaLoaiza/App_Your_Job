import React, { Component } from 'react';
import { render } from '@testing-library/react';
import notPage from '../images/error.jpg'

class FoundError extends  React.Component{
    render(){
        return(
            <div>
            {/* <img  src={notPage} /> */}
        </div>
        )
    }
}

export default FoundError;