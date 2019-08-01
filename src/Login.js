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
    const responseGoogle = (response) => {
      if (response.isSignedIn()) {
        this.setState({isLoggedIn: true});
        this.props.history.push("/home");
      }
    }
  
    return <Container>
      <GoogleLogin
        clientId="888470619238-6o95gggm4et485mon8dvtimi6ilri9ua.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        cookiePolicy={'single_host_origin'} />
    </Container>
  }

}

export default Login;