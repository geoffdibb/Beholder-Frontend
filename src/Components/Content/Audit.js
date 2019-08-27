import React from 'react';
import { Button, Form, Col, Row, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";

export default class Audit extends React.Component {

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
                this.props.passedFunction();
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
                this.props.passedFunction();
            })
            .catch(err => { this.setState({ message: "Search logs not found" }); });

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
                this.props.passedFunction();
            })
            .catch(err => { this.setState({ message: "User logs not found" }); });
    }


    render() {
        return (
            <div>
                <Col md='2'></Col>
                <div className="p-2 bg-info my-1 rounded">
                    <Row>

                        <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Col sm={{ size: '5', offset: 1 }}>
                                {this.responseauditrequestlogData}
                                <button onClick={this.searchauditrequestlog}> Retrieve audit request Logs </button>

                            </Col>
                            <Col>
                                {this.searchauditsearchlogs}
                                <button onClick={this.searchauditsearchlogs}> Retrieve search Logs </button>
                            </Col>
                            <Col>
                                {this.responseaudituseraccesslogData}
                                <button onClick={this.searchaudituseraccesslog}> Retrieve user access Logs </button>
                            </Col>
                        </Row>
                    </Row>
                </div>

            </div>
        );
    };

};