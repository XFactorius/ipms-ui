import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Incident from './Incident';
import NewIncident from './NewIncident';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/incidents' exact={true} component={Incident}/>
            <Route path='/create' exact={true} component={NewIncident}/>
        </Switch>
      </Router>
    )
  }
}

export default App;