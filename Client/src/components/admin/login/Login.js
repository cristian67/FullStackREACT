import React, { Component } from 'react';

class Login extends Component {
    
    emailRef    = React.createRef();
    passwordRef = React.createRef();

    render(){
        return(
       
            <div className="container">
                <div className="row">
                <div className="card-panel">
                    <h4 className="center-align">Login de Usuario</h4>
                </div>
                    <div className="card-panel">

                        <form> 
                            <div className="row">
                                <div className="input-field col s12">
                                    <input ref={this.emailRef} type="text" placeholder="E-mail" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input ref={this.passwordRef} type="text" placeholder="Password" />
                                </div>
                            </div>
                            <div className="center-align">
                                <button type="submit" className="btn light-blue darken-5">Send</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>     
            
        )
    }    
}

export default Login;