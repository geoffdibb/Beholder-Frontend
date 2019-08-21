import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    NavLink
} from 'reactstrap';

const GoBack = ({ history }) => <NavLink  onMouseEnter={() => {
          document.body.style.cursor = "pointer";
        }}
        onMouseLeave={() => {
          document.body.style.cursor = "default";
        }} onClick={() => history.goBack()}>Back</NavLink>
export default withRouter(GoBack);

