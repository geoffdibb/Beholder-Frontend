import React from 'react';
import { Button, Form, Row, Col } from 'reactstrap';

import SearchForm from './SearchForm'

export default class SearchPage extends React.Component {



    render() {
        return (
            <div>
                <br></br>
                <h1>Search</h1>
                <br></br>
                <Form>
                    <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <SearchForm />
                    </Row>
                    <Row>
                        <Col md='4'></Col>
                        <Col md='4'>
                            <Button>Search</Button>
                        </Col>
                        <Col md='4'></Col>
                    </Row>
                </Form>
            </div>
        );
    };

}