import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class SearchPage extends React.Component {



    render() {
        return (
            <div>
                <Form >
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="exampleName" className="mr-sm-2">FirstName</Label>
                        <Input type="firstname" name="firstname" id="firstname" placeholder="enter search term" />
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="exampleSurname" className="mr-sm-2">Surname</Label>
                        <Input type="surname" name="surname" id="surname" placeholder="enter search term" />
                    </FormGroup>


                    <Button>Search</Button>
                </Form>
            </div>
        );
    };

}