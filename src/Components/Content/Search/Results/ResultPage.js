import React from 'react';
import { Form, Col, Row, FormGroup, Label, Input, Spinner } from 'reactstrap';

import ResultList from './ResultList';

export default class ResultPage extends React.Component {

    constructor() {
        super()
        this.state = {
            category: "",
        };
    }

    searchdb = (e) => {
        e.preventDefault();
        let category = e.target[0].value;
        if (e.target[1].value === "") {
            this.setState({ message: "Please fill all fields" });
        } else {
            this.setState({
                category: category
            })
            this.props.search(category, e.target[1].value);
        }
    }
    render() {
        var loading = <Spinner style={{ width: '3rem', height: '3rem' }} />
        if (!this.props.loading) {
            loading = <ResultList searchResults={this.props.searchResults} search={this.props.search} selectProfile={this.props.selectProfile} category={this.props.category} />
        }
        return (
            <div>
                <h2>Search</h2>
                <Form onSubmit={this.searchdb}>
                    <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                            <input type="submit" className="btn btn-dark" value="Search" />
                        </Col>
                        <Col md='4'></Col>
                    </Row>
                </Form>
                <br></br>
                <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Col md='8'>
                        {loading}
                        {/* <ResultList searchResults={this.props.searchResults} search={this.props.search} selectProfile={this.props.selectProfile} category={this.props.category} /> */}
                    </Col>

                </Row>
            </div>
        );
    };

}