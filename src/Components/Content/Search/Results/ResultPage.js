import React from 'react';
import { Button, Form, Col, Row } from 'reactstrap';

import SearchForm from '../SearchForm';
import ResultList from './ResultList';

export default class ResultPage extends React.Component {

    render() {
        return (
            <div>
                <h2>Results</h2>
                <Form inline style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                    {/* {this.props.data.map(Result => (
                    <ResultPanel
                        key={Result._id}
                        username={Result.username}
                        content={Result.content}
                        />
             ))} */}
                    <SearchForm />
                    <SearchForm />
                    <SearchForm />
                    <SearchForm />
                    <Col md='12'>
                        <Button>Modify Search</Button>
                    </Col>
                </Form>
                <br></br>
                <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Col md='8'>
                        <ResultList />
                    </Col>

                </Row>
            </div>
        );
    };

}