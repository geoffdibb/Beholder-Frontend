import React from 'react';
import { Button, Form, Row, Col } from 'reactstrap';

import ResultPannel from './ResultPannel'
import SearchForm from '../SearchForm';

export default class ResultPage extends React.Component {

    render() {
        return (
            <div>
                <h2>Results</h2>
                <Form inline style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <SearchForm />
                    <SearchForm />
                    <SearchForm />
                    <SearchForm />
                    <Col md='12'>
                        <Button>Modify Search</Button>
                    </Col>
                </Form>



                {/* {this.props.data.map(Result => (
                    <ResultPannel
                        key={Result._id}
                        username={Result.username}
                        content={Result.content}
                        />
             ))} */}
                <ResultPannel />
                <ResultPannel />
                <ResultPannel />
                <ResultPannel />
            </div>
        );
    };

}