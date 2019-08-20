import React from 'react';
import { FormGroup, Label, Input, Row } from 'reactstrap';

export default class SearchPage extends React.Component {


    render() {
        return (
            <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
            </Row>
        )
    }
}