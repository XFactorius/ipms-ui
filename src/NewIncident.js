import React from 'react';
import {Form, FormGroup, Label, Input } from 'reactstrap';
import AppNavbar from './AppNavbar';

export default class NewIncident extends React.Component {
  render() {
    return <div><AppNavbar/>
      <Form>
        <FormGroup>
          <Label for="name">Email</Label>
          <Input type="text" name="name" id="name" placeholder="Incident name" />
        </FormGroup>
        <FormGroup>
           <Label for="exampleEmail">Email</Label>
           <Input type="date" name="date" id="date" placeholder="Incident date" />
         </FormGroup>
      </Form>
      </div>
      }
  }