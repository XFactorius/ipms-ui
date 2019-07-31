import React, { Component } from 'react';
//import { Table} from 'reactstrap';
//import AppNavbar from './AppNavbar';
import { Container} from 'reactstrap';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import AppNavbar from './AppNavbar';

export default class Incident extends Component {
  state = {
    isLoading: true,
    incidents: []
  };

  async componentDidMount() {
    const response = await fetch('http://localhost:8080/api/v1/incidents', {
    headers : {
            'Accept': 'application/json'
           }});
    const body = await response.json();
    this.setState({ incidents: body, isLoading: false });
 }

  render() {
    const {incidents, isLoading} = this.state;
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

       return <div><AppNavbar/><Container fluid><ReactTable
          data={data}
          columns={columns}
          showPagination={false}
        />
        </Container>
        </div>
  }
}

