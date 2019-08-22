import React from 'react';
import {
    Button, InputGroup,
    //  FormText, 
    Form, FormGroup,FormFeedback, FormText, Label, InputGroupText, InputGroupAddon, Input, Row, Col
} from 'reactstrap';


export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
    }

    handleCheckboxChange = (e) => {
        this.setState({ checked: e.target.checked });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let username = e.target[0].value
        let password = e.target[1].value
        this.props.logIn(username, password)
    }

    render() {
        return (
            <div>
                <img className='Logo'
                    src="logo.png"
                    alt="Beholder Logo"
                />
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col sm={{ size: '4', offset: 4 }}>
                            <h1>Welcome</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ size: '6', offset: 3 }}>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText style={{ width: '100px' }}>Username</InputGroupText>
                                </InputGroupAddon>
                                <Input type="username" name="username" id="username" placeholder="username" invalid={this.props.invalid} />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ size: '6', offset: 3 }}>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                </InputGroupAddon>
                                <InputGroupText type="password" name="password" style={{ width: '100px' }}>Password</InputGroupText>
                                <Input type="password" name="password" id="Password" placeholder="password" invalid={this.props.invalid} />
                                                            <FormFeedback>{this.props.feedback}</FormFeedback>

                            </InputGroup>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col sm={{ size: '4', offset: 4 }} style={{ justifyContent: 'center', alignItems: 'center' }}>
                            {/* <InputGroup check>
                                 <Label check>  */}
                            <Input type="checkbox" checked={this.state.checked} onChange={this.handleCheckboxChange} />
                            Check here if you are not a bot?
                                 {/* </Label> 
                            </InputGroup> */}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col sm={{ size: '4', offset: 4 }}>
                            <Button color="primary" disabled={!this.state.checked}>Login</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    };

}