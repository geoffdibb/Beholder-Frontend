import React from 'react';

import AssociatePanel from './AssociatePanel'

export default class AssociateList extends React.Component {

    render() {
        return (
            <div>

                 {this.props.associates.map((Result, index) => (
                    <AssociatePanel
                        key={index}
                        forenames={Result.forenames}
                        surname={Result.surname}
                        associateId={Result.associateId}
                        phoneCalls={Result.numberOfPhoneCalls}
                        latestCall={Result.latestPhoneCall}
                        />
             ))} 
            </div>
        );
    };

}