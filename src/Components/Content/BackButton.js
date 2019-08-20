import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    NavLink,
    NavItem
} from 'reactstrap';

// const GoBack = ({ history }) => <img src="./images/back.png" onClick={() => history.goBack()} alt="Go back" />;
const GoBack = ({ history }) => <NavItem><NavLink onClick={() => history.goBack()}>Back</NavLink></NavItem>
export default withRouter(GoBack);