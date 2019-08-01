import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <Container>
          <Button color="link"><Link to="/incidents">Incident list</Link></Button>
        </Container>
      </div>
    );
  }
}

export default Home;