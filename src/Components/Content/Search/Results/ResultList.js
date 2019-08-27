import React from 'react';

import ResultPanel from './ResultPanel'

export default class ResultList extends React.Component {

    render() {
        return (
            <div>

                 {this.props.searchResults.map(Result => (
                    <ResultPanel
                        key={Result.id}
                        forenames={Result.forenames}
                        surname={Result.surname}
                        homeAddress={Result.homeAddress}
                        result={Result}
                        selectProfile={this.props.selectProfile}
                    />
                ))} 
               
            </div>
        );
    };

}