import React from 'react';
import { Button, InputGroup, FormText, Form, FormGroup, Label, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

export default class Login extends React.Component {

    render() {
        return (
            <div>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>Username</InputGroupText>
                    </InputGroupAddon>
                    <Input />
                </InputGroup>

                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>Password</InputGroupText>
                    </InputGroupAddon>
                    <Input />
                </InputGroup>
                <br />
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />
                        Verify humanity?
                    </Label>
                </FormGroup>

                <br />
                <Button color="primary">Login</Button>
            </div>
        );
    };

}