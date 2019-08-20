import React from 'react';
import NavigationBar from './NavigationBar';
import { Route } from "react-router-dom";
import {
    Row,
    Col
} from 'reactstrap';

import MapPage from './Search/Results/MapPage';
import Profile from './Search/Results/Citezen/Profile';
import ResultPage from './Search/Results/ResultPage';
import SearchPage from './Search/SearchPage';
import Audit from './Audit';
import VehicleProfile from './Search/Results/Vehicle/VehicleProfile';

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
                        <Route path="/home/MapPage" component={MapPage} />

                        <Route path="/home/Profile" component={Profile} />

                        <Route path="/home/Results" component={ResultPage} />

                        <Route exact path="/home/" component={SearchPage} />

                        <Route path="/home/Audit" component={Audit} />

                        <Route path="/home/Vehicle" component={VehicleProfile} />
                    </Col>
                    <Col md='1'></Col>
                </Row>
            </div>
        );
    };

}