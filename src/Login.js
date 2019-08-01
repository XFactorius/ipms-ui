import React, { Component } from 'react';
import './App.css';
import GoogleLogin from 'react-google-login';
import { Container } from 'reactstrap';
class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false }
  }

  render() {

    return <Container>
      <GoogleLogin
        clientId="888470619238-6o95gggm4et485mon8dvtimi6ilri9ua.apps.googleusercontent.com"
        buttonText="Login"
        uxMode='redirect'
        redirectUri="http://localhost:3000/home"
        cookiePolicy={'single_host_origin'} />
    </Container>
  }

}

export default Login;