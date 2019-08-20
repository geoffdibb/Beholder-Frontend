import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    NavLink,
    NavItem
} from 'reactstrap';

const GoBack = ({ history }) => <NavItem><NavLink onClick={() => history.goBack()}>Back</NavLink></NavItem>
export default withRouter(GoBack);