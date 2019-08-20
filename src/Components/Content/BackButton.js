import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    NavLink
} from 'reactstrap';

const GoBack = ({ history }) => <NavLink onClick={() => history.goBack()}>Back</NavLink>
export default withRouter(GoBack);