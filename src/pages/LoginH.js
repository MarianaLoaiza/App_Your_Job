import React,{Component} from 'react';
import Login from '../components/Login';


class LoginH extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <React.Fragment>
                <Login />
            </React.Fragment>

         );
    }
}
 
export default LoginH ;