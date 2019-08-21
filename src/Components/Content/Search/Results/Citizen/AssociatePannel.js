import React from 'react';
import {
    Row,
    Col,
    Button
} from 'reactstrap';
import ExpandCollapse from 'react-expand-collapse';

export default class AssociatePannel extends React.Component {

expanddetails(){

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
                                            width="50"
                                            height="50"
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
                                        <h4>Phone Calls</h4>
                                        <p>Placeholder Calls</p>
                                    </Col>
                                    <Col sm={{ size: 'auto', offset: 0 }} >
                                        <Button onClick={this.expanddetails} outline color="primary">More Info</Button>{' '}

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