import React from 'react';
import {
    Row,
    Col,
    Button,
    Collapse,
    CardBody,
    Card
} from 'reactstrap';
import ExpandCollapse from 'react-expand-collapse';

export default class AssociatePannel extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }
    expanddetails() {

    }

    render() {
        return (
            <div>

                <Row>
                    <Col md='2'></Col>
                    <Col sm={{ size: '8', offset: 0 }}>
                        <div className="p-2 bg-info my-1 rounded   "color='#474C55'>
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
                                        <p>{this.props.forenames} {this.props.surname}</p>
                                    </Col>

                                    <Col sm={{ size: 'auto', offset: 0 }} >
                                        <Button onClick={this.toggle} outline color="primary">More Info</Button>{' '}

                                    </Col>
                                    <Collapse isOpen={this.state.collapse}>
                                        <Card>
                                            <CardBody >
                                                <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Col sm={{ size: 'auto', offset: 0 }}>
                                                        <h5>Phone Calls</h5>
                                                        <p>{this.props.phoneCalls}</p>
                                                    </Col>
                                                </Row>
                                                <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Col sm={{ size: 'auto', offset: 0 }}>
                                                        <h5>Last Call</h5>
                                                        <p>{this.props.latestCall}</p>
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                </Row>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    };

}