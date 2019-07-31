import React from 'react';
import {Form, FormGroup, Label, Input, Button, Container} from 'reactstrap';
import AppNavbar from './AppNavbar';

export default class NewIncident extends React.Component {
  render() {
    return <div><AppNavbar/>
    <Container fluid>
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="name" className="mr-sm-2">Email</Label>
          <Input type="text" name="name" id="name" placeholder="Incident name" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
           <Label for="date" className="mr-sm-2">Date</Label>
           <Input type="date" name="date" id="date" placeholder="Incident date" />
         </FormGroup>
         <Button>Submit</Button>
      </Form>
      </Container>
      </div>
      }
  }