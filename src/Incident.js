import React, { Component } from 'react';
import { Table, Container} from 'reactstrap';
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

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
        <div>
        <AppNavbar/>
        <Container fluid>
        <Table>
            <thead>
                <tr>
                    <th>Incident Name</th>
                    <th>Incident Date</th>
                </tr>
            </thead>

            <tbody>
            {incidents.map(incident =>
                <tr>
                    <td> {incident.name} </td>
                    <td> {incident.startDate} </td>
                </tr>
            )}
            </tbody>
        </Table>
        </Container>
        </div>
    )
  }
}

