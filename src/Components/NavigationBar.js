import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

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
                    <NavbarBrand className="mx-auto d-none" href="/" >
                        <img
                            src="../../logo192.png"
                            width="30"
                            height="30"
                            alt="React Bootstrap logo"
                        />
                        Beholder</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    <NavbarBrand className="ml-auto d-lg-block-auto" href="/" >
                        <img
                            src="../../LucyVariant.png"
                            width="160"
                            height="39"
                            alt="React Bootstrap logo"
                        />
                        </NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="./SearchPage">Search</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="./Login">Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="./Log out">Log Out</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}