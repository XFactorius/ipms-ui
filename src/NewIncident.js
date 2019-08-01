import React from 'react';
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import AppNavbar from './AppNavbar';
import Alert from './Alert';

export default class NewIncident extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.cancel = this.cancel.bind(this);
    this.state = {
      name: "",
      startDate: "",
      errors: []
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({});

    if (this.state.name === "") {
      this.state.errors.push("Empty incident name");
    }

    if (this.state.startDate === "") {
      this.state.errors.push("Empty date");
    }

    if (new Date(this.state.startDate) > new Date()) {
      this.state.errors.push("Date is after current date");
    }

    if (this.state.errors.length === 0) {
      const data = JSON.stringify({ name: this.state.name, startDate: this.state.startDate })
      fetch('http://localhost:8080/api/v1/incidents', {
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      this.props.history.push("/incidents");
    }
  }

  nameChange(name) {
    this.setState({ name: name.target.value, errors:[]});
  }

  dateChange(date) {
    this.setState({ startDate: date.target.value, errors:[]});
  }

  cancel() {
    this.props.history.push("/incidents");
  }

  render() {
    return <div><AppNavbar />
      <Container>

        {Array.from(new Set(this.state.errors)).map(error => (
          <Alert message={error} />
        ))}
        <Form inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="name" className="mr-sm-2">Email</Label>
            <Input type="text" name="name" id="name" placeholder="Incident name" onChange={this.nameChange} />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="date" className="mr-sm-2">Date</Label>
            <Input type="date" name="date" id="date" placeholder="Incident date" onChange={this.dateChange} />
          </FormGroup>
          <Button color="primary" onClick={this.handleSubmit}>Submit</Button>
          <Button color="danger" onClick={this.cancel}>Cancel</Button>
        </Form>
      </Container>
    </div>
  }
}