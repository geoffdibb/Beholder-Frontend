import React from 'react';
import {
    Row,
    Col,
    Button
} from 'reactstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from "./Citizen/Profile";

export default class ResultPanel extends React.Component {

ProfilePage(){
}
    render() {
        return (
            <div>
                <Row>
                    <Col md='2'></Col>
                    <Col sm={{ size: '8', offset: 0 }}>
                        <div className="p-2 bg-info my-1 rounded">
                            <Row>
                                <div className="p-2 bg-secondary my-1 rounded">
                                    <Col sm={{ size: 'auto', offset: 0 }}>
                                        <img
                                            src="../../blankicon.png"
                                            width="100"
                                            height="100"
                                            alt="Profile"
                                        />
                                    </Col>
                                </div>
                                <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Col sm={{ size: 'auto', offset: 1 }}>
                                        <h4>Name</h4>
                                        <p>placeholder name</p>
                                    </Col>
                                    <Col sm={{ size: 'auto', offset: 0 }}>
                                        <h4>City</h4>
                                        <p>Placeholder City</p>
                                    </Col>
                                    <Col sm={{ size: 'auto', offset: 0 }} >

                                                <Button onClick={this.ProfilePage}>Profile</Button>
                                                <Route exact path="/Profile/:userId" component={Profile} />


                                    </Col>
                                </Row>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    };

}