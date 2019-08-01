import React from 'react';
import {Form, FormGroup, Label, Input, Button, Container} from 'reactstrap';
import AppNavbar from './AppNavbar';

export default class NewIncident extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.state = {
       name: "",
       startDate: "",
    }
  }

  handleSubmit(event) {
      event.preventDefault();

      const data = JSON.stringify({name: this.state.name, startDate: this.state.startDate})

      fetch('http://localhost:8080/api/v1/incidents', {
        method: 'POST',
        body: data ,
        headers: {
          'Content-Type': 'application/json',
          },
      });
    }

   nameChange (name) {
      this.setState({name: name.target.value});
   }

   dateChange (date) {
      this.setState({startDate: date.target.value});
   }

  render() {
    return <div><AppNavbar/>
    <Container>
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="name" className="mr-sm-2">Email</Label>
          <Input type="text" name="name" id="name" placeholder="Incident name" onChange={this.nameChange}/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
           <Label for="date" className="mr-sm-2">Date</Label>
           <Input type="date" name="date" id="date" placeholder="Incident date" onChange={this.dateChange}/>
         </FormGroup>
         <Button onClick={this.handleSubmit}>Submit</Button>
      </Form>
      </Container>
      </div>
      }
  }