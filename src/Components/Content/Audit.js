import React from 'react';
import { Button, Col, Row, Table } from 'reactstrap';
import axios from "axios";

export default class Audit extends React.Component {

    constructor() {
        super()
        this.state = {
            button: "",
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
            .get("/getauditrequestlog/" + this.props.username, { headers })
            .then(response => {
                this.setState({
                    responseauditrequestlogData: (response.data),
                    button: "1"
                });
            })
            .catch(err => {
                console.log('Audit logs not found')
                this.setState({ message: "Audit logs not found" });
            });

    }


    //searchlogs
    searchauditsearchlogs = (e) => {
        e.preventDefault();
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': this.props.apitoken
        }
        axios
            .get("/getsearchlog/" + this.props.username, { headers })
            .then(response => {
                this.setState({
                    responsesearchlogData: (response.data),
                    button: "2"
                });
            })
            .catch(err => {
                console.log("Search logs not found");
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
            .get("/user/getaudituseraccesslog/" + this.props.username, { headers })
            .then(response => {
                this.setState({
                    responseaudituseraccesslogData: (response.data),
                    button: "3"
                });
            })
            .catch(err => {
                console.log("User logs not found");
                this.setState({ message: "User logs not found" });
            });
    }

    renderLog1(response, index) {
        return (
            <tr key={index}>
                <td>{index}</td>
                <td>{response.username}</td>
                <td>{response.timeStamp}</td>
            </tr>
        )
    }

    renderLog2(response, index) {
        return (
            <tr key={index}>
                <td>{index}</td>
                <td>{response.username}</td>
                <td>{response.category}</td>
                <td>{response.searchTerm}</td>
                <td>{response.timeStamp}</td>
            </tr>
        )
    }

    render() {
        var table = <Table />
        if (this.state.button === "1") {
            table = <Table striped hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>Username</th>
                        <th>Time Stamp</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.responseauditrequestlogData.map(this.renderLog1)}
                </tbody>
            </Table>
        }
        if (this.state.button === "2") {
            table = <Table striped hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>Username</th>
                        <th>Category</th>
                        <th>Search Term</th>
                        <th>Time Stamp</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.responsesearchlogData.map(this.renderLog2)}
                </tbody>
            </Table>
        }
        if (this.state.button === "3") {
            table = <Table striped hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>Username</th>
                        <th>Time Stamp</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.responseaudituseraccesslogData.map(this.renderLog1)}
                </tbody>
            </Table>
        }
        return (
            <div className="p-2 bg-info my-1 rounded">
                <br></br>
                <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Col sm={{ size: '3', offset: 0 }}>
                        <Button onClick={this.searchauditrequestlog}> Retrieve audit request Logs </Button>
                    </Col>
                    <Col sm={{ size: '3', offset: 1 }}>
                        <Button onClick={this.searchauditsearchlogs}> Retrieve search Logs </Button>
                    </Col>
                    <Col sm={{ size: '3', offset: 1 }}>
                        <Button onClick={this.searchaudituseraccesslog}> Retrieve user access Logs </Button>
                    </Col>
                </Row>
                <Row>
                    {table}
                </Row>

            </div>
        );
    };

};
