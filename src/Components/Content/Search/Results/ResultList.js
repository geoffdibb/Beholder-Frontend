import React from 'react';

import ResultPanel from './ResultPanel'

export default class ResultList extends React.Component {

    render() {
        return (
            <div>

                 {this.props.searchResults.map(Result => (
                    <ResultPanel
                        key={Result._id}
                        forenames={Result.forenames}
                        surname={Result.surname}
                        homeAddress={Result.homeAddress}
                        result={Result}
                        selectProfile={this.props.selectProfile}
                    />
                ))} 
                {/* <ResultPanel selectProfile={this.props.selectProfile} result={{'_id':1234, 'forenames':'Aaron', 'surname':'Smith', 'homeAddress':'123 Street, London, W1 1AA' }}/>
                <ResultPanel /> */}

            </div>
        );
    };

}