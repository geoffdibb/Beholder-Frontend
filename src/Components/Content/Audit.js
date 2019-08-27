import React from 'react';
import { Button, Form, Col, Row, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";

export default class Audit extends React.Component {

searchauditdb =(e) => {
        e.preventDefault();
               const headers = {
            'Content-Type': 'application/json',
            'Authorization': this.props.apitoken
        }
            axios
                .get("http://localhost:5001/getauditrequestlog/" + this.props.username , { headers })
                .then(response => {
                   this.setState({
                    responseData: (response.data)
                });
                    this.props.passedFunction();
                })
                .catch(err => { this.setState({ message: "Logs not found" }); });

        }
    

    render() {
        return (
            <div>
                    <Col md='2'></Col>
                        <div className="p-2 bg-info my-1 rounded">
                            <Row>
 
                                <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Col sm={{ size: '5', offset: 1 }}>
                                    {this.responseData}
                    

                                    </Col>
                                </Row>
                            </Row>
                        </div>
                        <button onClick= {this.searchauditdb}> Retrieve Logs </button>

            </div>
        );
    };

};