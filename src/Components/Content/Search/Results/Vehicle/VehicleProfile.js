import React from 'react';
import { Row, Col, Table } from 'reactstrap';


export default class VehicleProfile extends React.Component {

    render() {
        return (
            <div>
                <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <h1>Vehicle Profile</h1>
                </Row>
                <Row>
                    <Col sm={{ size: '9', offset: 0 }}>
                        <Row>
                            <Col sm={{ size: '4', offset: 0 }}>
                                <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <div style={{ 'background-image': 'url("../../../CarPlate.png")', width: 486, height: 103 }}>
                                        <Col sm={{ size: '11', offset: 1 }}>
                                            <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 50, marginTop: 18 }}> {this.props.profileData.carReg}</h1>
                                        </Col>
                                    </div>
                                </Row>
                                <Row>
                                    <Col md='12' className="p-2 bg-secondary my-1 rounded">
                                        <h4>Owner Details</h4>
                                        <Row>
                                            <Col sm={{ size: '5', offset: 0 }}>
                                                <h5>Name</h5>
                                            </Col>
                                            <Col sm={{ size: '7', offset: 0 }}>
                                                <p>{this.props.profileData.forenames} {this.props.profileData.surname}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={{ size: '5', offset: 0 }}>
                                                <h5>Citizen ID</h5>
                                            </Col>
                                            <Col sm={{ size: '7', offset: 0 }}>
                                                <p>{this.props.profileData.citizenID}</p>
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
                                            <Col sm={{ size: '5', offset: 0 }}>
                                                <h5>Make</h5>
                                            </Col>
                                            <Col sm={{ size: '7', offset: 0 }}>
                                                <p>{this.props.profileData.make}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={{ size: '5', offset: 0 }}>
                                                <h5>Model</h5>
                                            </Col>
                                            <Col sm={{ size: '7', offset: 0 }}>
                                                <p>{this.props.profileData.model}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={{ size: '5', offset: 0 }}>
                                                <h5>Colour</h5>
                                            </Col>
                                            <Col sm={{ size: '7', offset: 0 }}>
                                                <p>{this.props.profileData.colour}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={{ size: '5', offset: 0 }}>
                                                <h5>Years Owned</h5>
                                            </Col>
                                            <Col sm={{ size: '7', offset: 0 }}>
                                                <p>{this.props.profileData.yearsOwned}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={{ size: '5', offset: 0 }}>
                                                <h5>Number of Owners</h5>
                                            </Col>
                                            <Col sm={{ size: '7', offset: 0 }}>
                                                <p>{this.props.profileData.owners}</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={{ size: '2', offset: 1 }} className="p-2 bg-secondary my-1 rounded">
                        <h4>Recorded Locations</h4>
                        <Table dark>
                            <thead>
                                <tr>
                                    <th>Time</th>
                                    <th>Street Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>11/11/11 00:00</td>
                                    <td>A1</td>
                                </tr>
                                <tr>
                                    <td>11/11/11 00:00</td>
                                    <td>A1</td>
                                </tr>
                                <tr>
                                    <td>11/11/11 00:00</td>
                                    <td>A1</td>
                                </tr>
                            </tbody>
                        </Table>

                    </Col>
                </Row>
            </div>
        );
    };

}