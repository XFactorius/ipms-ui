import React, { Component } from 'react';
//import { Table} from 'reactstrap';
//import AppNavbar from './AppNavbar';
import { Container, Button } from 'reactstrap';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

export default class Incident extends Component {
  state = {
    isLoading: true,
    incidents: []
  };

  async componentDidMount() {
    const response = await fetch('http://localhost:8080/api/v1/incidents', {
      headers: {
        'Accept': 'application/json'
      }
    });
    const body = await response.json();
    this.setState({ incidents: body, isLoading: false });
  }

  render() {
    const { incidents, isLoading } = this.state;
    const data = incidents;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const columns = [{
      Header: 'Name',
      accessor: 'name',
      filterable: true
    }, {
      Header: 'Date',
      accessor: 'startDate'
    }]

    return <div><AppNavbar /><Container>
      <Button color="link"><Link to="/create">New incident</Link></Button>
      <ReactTable
        data={data}
        columns={columns}
        showPagination={false}
      />
    </Container>
    </div>
  }
}

