import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Col
} from 'reactstrap';
import BackButton from './BackButton';


export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <Col md='4'>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/" >Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <BackButton />
                            </NavItem>
                                    
                            <NavItem>
                                <NavLink href="/Results">Search Results</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col md='4'>
                        <NavbarBrand className="mx-auto" href="/"  >
                            <img
                                src="../logo.png"
                                width="160"
                                height="39"
                                alt="Beholder logo"
                            />
                        </NavbarBrand>
                    </Col>
                    <Col md='4'>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/" >Log Out</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Col>
                </Navbar>
            </div>
        );
    }
}