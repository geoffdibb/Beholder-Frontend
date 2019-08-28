import React from 'react';
import { Link } from "react-router-dom";
import { Form, Row, Col, FormGroup, Label, Input } from 'reactstrap';


export default class SearchPage extends React.Component {



    constructor() {
        super();
        this.state = {
            responseData: ""
        };
    }

    searchdb = (e) => {
        e.preventDefault();
        let category = e.target[0].value;
        if (e.target[1].value === "") {
            this.setState({ message: "Please fill all fields" });
        } else {
            this.props.search(category, e.target[1].value);
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
                                    <option>Forenames</option>
                                    <option>Surname</option>
                                    <option>Car Reg</option>
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
                        <Link to='/Results'>
                            <input type="submit" className="btn btn-dark" value="Search" />
                            </Link>
                        </Col>
                        <Col md='4'></Col>
                    </Row>
                </Form>
            </div>
        );
    };

}