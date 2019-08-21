import React from 'react';
import axios from "axios";

import { Button, Form, Row, Col, FormGroup, Label, Input } from 'reactstrap';


export default class SearchPage extends React.Component {



    constructor() {
        super();
        this.state = {
            responseData: ""
        };
    }

    searchdb = (e) => {
        e.preventDefault();
        let name = e.target[0].value;
        if (name === "") {
            this.setState({ message: "Please fill all fields" })
        } else {
            axios
                .get("http://localhost:8080/search/name/" + name)
                .then(response => {
                    this.setState({
                        responseData: (response.data)
                    });
                    this.props.passedFunction();
                })
                .catch(err => { this.setState({ message: "name not found" }); });

        }
    }

    render() {
        return (
            <div>
                <br></br>
                <h1>Search</h1>
                <br></br>
                <Form onSubmit={this.searchdb}>
                    <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {/* <SearchForm onRef={ref => (this.SearchForm = ref)}/> */}
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <FormGroup>
                                <Label for="Category" hidden>Category</Label>
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
                    </Row>
                    <Row>
                        <Col md='4'></Col>
                        <Col md='4'>
                            <input type="submit" className="btn btn-dark" value="Search" />

                        </Col>
                        <Col md='4'></Col>
                    </Row>
                </Form>
            </div>
        );
    };

}