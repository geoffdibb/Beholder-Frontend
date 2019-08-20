import React from 'react';
import {
    Row,
    Col,
    Button
} from 'reactstrap';

export default class ResultPannel extends React.Component {

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
                                        <p>Placeholder Name</p>
                                    </Col>
                                    <Col sm={{ size: 'auto', offset: 0 }}>
                                        <h4>City</h4>
                                        <p>Placeholder City</p>
                                    </Col>
                                    <Col sm={{ size: 'auto', offset: 0 }} >
                                        <Button outline color="primary">More Info</Button>{' '}
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