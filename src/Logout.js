import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';

export default class Logout extends Component {

   render() {
    return <GoogleLogout
      clientId="888470619238-6o95gggm4et485mon8dvtimi6ilri9ua.apps.googleusercontent.com"
      buttonText="Logout"
      uxMode='redirect'
      redirectUri="http://localhost:3000"
      />
    }
}