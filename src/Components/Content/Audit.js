import React from 'react';
import { Button, Col, Row, Table } from 'reactstrap';
import axios from "axios";

export default class Audit extends React.Component {

    constructor() {
        super()
        this.state = {
            button: "",
            responseAuditRequestLogData: [],
            responseSearchLogData: [],
            responseAuditUserAccessLogData: []
        };

    }

    //auditrequests
    searchAuditRequestLog = (e) => {
        e.preventDefault();
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': this.props.apitoken
        }
        axios
            .get("/user/getauditrequestlog/" + this.props.username, { headers })
            .then(response => {
                this.setState({
                    responseAuditRequestLogData: (response.data),
                    button: "1"
                });
            })
            .catch(err => {
                console.log('Audit logs not found')
                this.setState({ message: "Audit logs not found" });
            });

    }


    //searchlogs
    searchAuditSearchLogs = (e) => {
        e.preventDefault();
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': this.props.apitoken
        }
        axios
            .get("/user/getsearchlog/" + this.props.username, { headers })
            .then(response => {
                this.setState({
                    responseSearchLogData: (response.data),
                    button: "2"
                });
            })
            .catch(err => {
                console.log("Search logs not found");
                this.setState({ message: "Search logs not found" });
            });

    }


    //accesslogs
    searchAuditUserAccessLog = (e) => {
        e.preventDefault();
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': this.props.apitoken
        }
        axios
            .get("/user/getaudituseraccesslog/" + this.props.username, { headers })
            .then(response => {
                this.setState({
                    responseAuditUserAccessLogData: (response.data),
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
                    {this.state.responseAuditRequestLogData.map(this.renderLog1)}
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
                    {this.state.responseSearchLogData.map(this.renderLog2)}
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
                    {this.state.responseAuditUserAccessLogData.map(this.renderLog1)}
                </tbody>
            </Table>
        }
        return (
            <div className="p-2 bg-info my-1 rounded">
                <br></br>
                <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Col sm={{ size: '3', offset: 0 }}>
                        <Button onClick={this.searchAuditRequestLog}> Retrieve audit request Logs </Button>
                    </Col>
                    <Col sm={{ size: '3', offset: 1 }}>
                        <Button onClick={this.searchAuditSearchLogs}> Retrieve search Logs </Button>
                    </Col>
                    <Col sm={{ size: '3', offset: 1 }}>
                        <Button onClick={this.searchAuditUserAccessLog}> Retrieve user access Logs </Button>
                    </Col>
                </Row>
                <Row>
                    {table}
                </Row>

            </div>
        );
    };

};
