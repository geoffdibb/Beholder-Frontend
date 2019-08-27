import React from 'react';
import { Button, Form, Col, Row, FormGroup, Label, Input, Table } from 'reactstrap';
import axios from "axios";

export default class Audit extends React.Component {

     constructor() {
        super()
        this.state = {
            responseauditrequestlogData: [],
            responsesearchlogData: [],
            responseaudituseraccesslogData: []
        };

    }

    //auditrequests
    searchauditrequestlog = (e) => {
        e.preventDefault();
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': this.props.apitoken
        }
        axios
            .get("http://localhost:5001/getauditrequestlog/" + this.props.username, { headers })
            .then(response => {
                this.setState({
                    responseauditrequestlogData: (response.data)
                });
            })
            .catch(err => { this.setState({ message: "Audit logs not found" }); });

    }

    
    //searchlogs
    searchauditsearchlogs = (e) => {
        e.preventDefault();
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': this.props.apitoken
        }
        axios
            .get("http://localhost:5001/getsearchlog/" + this.props.username, { headers })
            .then(response => {
                this.setState({
                    responsesearchlogData: (response.data)
                });

                console.log(this.state.responsesearchlogData)
            })
            .catch(err => {
                this.setState({ message: "Search logs not found" });
            });

    }


    //accesslogs
    searchaudituseraccesslog = (e) => {
        e.preventDefault();
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': this.props.apitoken
        }
        axios
            .get("http://localhost:5001/getaudituseraccesslog/" + this.props.username, { headers })
            .then(response => {
                this.setState({
                    responseaudituseraccesslogData: (response.data)
                });
            })
            .catch(err => {
                this.setState({ message: "User logs not found" });
            });
    }

    renderLog(response, index) {
        return (
            <tr key={index}>
                <td>{response.username}</td>
            </tr>
        )
    }

    render() {
        return (
            <div>
                <Col md='2'></Col>
                <div className="p-2 bg-info my-1 rounded">
                    <Row>

                        <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Col sm={{ size: '5', offset: 1 }}>
                                <p>{this.state.responseauditrequestlogData}</p>
                                <button onClick={this.searchauditrequestlog}> Retrieve audit request Logs </button>

                            </Col>
                            <Col>
                                <p>{this.state.searchauditsearchlogs}</p>
                                <button onClick={this.searchauditsearchlogs}> Retrieve search Logs </button>
                            </Col>
                            <Col>
                                <p>{this.state.responseaudituseraccesslogData}</p>
                                <button onClick={this.searchaudituseraccesslog}> Retrieve user access Logs </button>
                            </Col>
                        </Row>
                    </Row>
                    <Row>
                        <p>{this.state.responseauditrequestlogData}</p>
                        <p>{this.state.searchauditsearchlogs}</p>
                        <p>{this.state.responseaudituseraccesslogData}</p>
                        <Table striped condensed hover>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.responsesearchlogData.map(this.renderLog)}
                            </tbody>
                        </Table>

                    </Row>

                </div>

            </div>
        );
    };

};