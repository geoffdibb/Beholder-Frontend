import React from 'react';
import NavigationBar from './NavigationBar';
import { Route } from "react-router-dom";
import {
    Row,
    Col
} from 'reactstrap';

import MapPage from './Search/Results/MapPage';
import Profile from './Search/Results/Citizen/Profile';
import ResultPage from './Search/Results/ResultPage';
import SearchPage from './Search/SearchPage';
import Audit from './Audit';

export default class Homepage extends React.Component {

    render() {
        return (
            <div>
                <Row>
                    <Col md='12'>
                        <NavigationBar />
                    </Col>
                </Row>
                <Row>
                    <Col md='1'></Col>
                    <Col md='10'>
                        <Route path="/MapPage" component={MapPage} />

                        <Route path="/Profile" component={Profile} />

                        <Route path="/Results" component={ResultPage} />

                        <Route exact path="/" component={SearchPage} />

                        <Route path="/Audit" component={Audit} />
                    </Col>
                    <Col md='1'></Col>
                </Row>
            </div>
        );
    };

}