import React,{Component} from 'react';
import Navbar from '../components/Navbar';
import Register from '../components/Register';



class RegisterH extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <React.Fragment>
                <Navbar />
                <Register />
                
            </React.Fragment>

         );
    }
}
 
export default RegisterH ;