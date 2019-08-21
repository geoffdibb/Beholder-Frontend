import React from 'react';
import { FormGroup,Button, Label, Input } from 'reactstrap';

export default class SearchForm extends React.Component {


    render() {
        return (
            <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FormGroup>
                    <Label for="Catagory" hidden>Catagoy</Label>
                    <Input type="select">
                        <option>Name</option>
                        <option>Location</option>
                        <option>Car Reg</option>
                        <option>Time</option>
                    </Input>
                </FormGroup>

                
                <FormGroup>
                    <Label for="Search" hidden>Search</Label>
                    <Input type="search" name="search" id="Search" placeholder="Search" />
                </FormGroup>
            </div>
            <div>
                  {/* <Button variant="Add Search Field">Add Search Field</Button> */}
                  <div/>

                </div>
                </div>
        )
    }
}