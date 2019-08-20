import React from 'react';
import {
    Button, InputGroup,
    //  FormText, Form,
    FormGroup, Label, InputGroupText, InputGroupAddon, Input, Row, Col
} from 'reactstrap';


export default class Login extends React.Component {

    render() {
        return (
            <div>
                <img className='Logo'
                    src="logo.png"
                    alt="Beholder Logo"
                />
                <Row>
                    <Col md='4'></Col>
                    <Col md='4'>
                    <h1>Welcome</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md='3'></Col>
                    <Col md='6'>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText style={{ width:'100px' }}>Username</InputGroupText>
                            </InputGroupAddon>
                            <Input />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md='3'></Col>
                    <Col md='6'>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText style={{ width:'100px' }}>Password</InputGroupText>
                            </InputGroupAddon>
                            <Input />
                        </InputGroup>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md='4'></Col>
                    <Col md='4'>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" />
                                Verify humanity?
                    </Label>
                        </FormGroup>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md='4'></Col>
                    <Col md='4'>
                        <Button color="primary">Login</Button>
                    </Col>
                </Row>
            </div>
        );
    };

}