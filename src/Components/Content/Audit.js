import React from 'react';
import { Button, Form, Col, Row, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";

export default class Audit extends React.Component {

searchauditdb =(e) => {
        e.preventDefault();
       
            axios
                .get("http://localhost:8083/beholder/getAuditRequestLog/")
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