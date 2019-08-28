import React from 'react';
import { Row, Col } from 'reactstrap';

import AssociateList from './AssociateList';

export default class Profile extends React.Component {

    render() {
        return (
            <div>
                <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <h1>Citizen Profile</h1>
                </Row>
                <Row>
                    <Col sm={{ size: '9', offset: 0 }}>
                        <Row>
                            <Col sm={{ size: '4', offset: 0 }}>
                                <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <img
                                        src="../../../blankicon.png"
                                        width="150"
                                        height="150"
                                        alt="Profile"
                                    />
                                </Row>
                                <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <h3>{this.props.profileData.forenames} {this.props.profileData.surname}</h3>
                                </Row>
                                <Row>
                                    <Col md='12' className="p-2 bg-secondary my-1 rounded">
                                        <h4>Contact</h4>
                                        <Row>
                                            <Col sm={{ size: '5', offset: 0 }}>
                                                <h5>Phone Number</h5>
                                            </Col>
                                            <Col sm={{ size: '7', offset: 0 }}>
                                                <p>{this.props.profileData.phoneNumber}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={{ size: '5', offset: 0 }}>
                                            <br></br>
                                                <h5>Address</h5>
                                            </Col>
                                            <Col sm={{ size: '7', offset: 0 }}>
                                                <p>{this.props.profileData.homeAddress}</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={{ size: '7', offset: 1 }}>
                                <Row>
                                    <br></br>
                                    <br></br>
                                </Row>
                                <Row>
                                    <Col sm={{ size: '12', offset: 0 }} className="p-2 bg-secondary my-1 rounded">
                                        <h4>Details</h4>
                                        <Row>
                                        <Row>
                                            <Col sm={{ size: '5', offset: 0 }}>
                                                <h5>Sex</h5>
                                            </Col>
                                            <Col sm={{ size: '7', offset: 0 }}>
                                                <p>{this.props.profileData.sex}</p>
                                            </Col>
                                        </Row>
                                            <Col sm={{ size: '5', offset: 0 }}>
                                                <h5>Age</h5>
                                            </Col>
                                            <Col sm={{ size: '7', offset: 0 }}>
                                                <p>{this.props.profileData.age}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={{ size: '5', offset: 0 }}>
                                                <h5>D.O.B.</h5>
                                            </Col>
                                            <Col sm={{ size: '7', offset: 0 }}>
                                                <p>{this.props.profileData.dateOfBirth}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={{ size: '5', offset: 0 }}>
                                                <h5>Place of Birth</h5>
                                            </Col>
                                            <Col sm={{ size: '7', offset: 0 }}>
                                                <p>{this.props.profileData.placeOfBirth}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={{ size: '5', offset: 0 }}>
                                                <h5>Car Registration</h5>
                                            </Col>
                                            <Col sm={{ size: '7', offset: 0 }}>
                                                <p>{this.props.profileData.carReg}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={{ size: '5', offset: 0 }}>
                                                <h5>Citizen ID</h5>
                                            </Col>
                                            <Col sm={{ size: '7', offset: 0 }}>
                                                <p>{this.props.profileData.citizenId}</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={{ size: '3', offset: 0 }}>
                        <h3>Associates</h3>
                        <AssociateList associates={this.props.profileData.associateList} />
                    </Col>
                </Row>


            </div>
        );
    };

}