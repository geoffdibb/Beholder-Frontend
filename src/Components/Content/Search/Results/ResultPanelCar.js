import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Link } from "react-router-dom";

export default class ResultPanel extends React.Component {

    ProfilePage = () => {
        this.props.selectProfile(this.props.result);
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
                                    <Col sm={{ size: '5', offset: 1 }}>
                                        <h4>Name</h4>
                                        <p>{this.props.forenames} {this.props.surname}</p>
                                    </Col>
                                    <Col sm={{ size: '5', offset: 1 }}>
                                        <h4>Car Registration</h4>
                                        <p>{this.props.carReg}</p>
                                    </Col>
                                    <Col sm={{ size: 'auto', offset: 0 }} >
                                        <Link to={`/Vehicle`}>
                                            <Button onClick={this.ProfilePage}>Profile</Button>
                                        </Link>
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