import React from 'react';

import ResultPanel from './ResultPanel'

export default class ResultList extends React.Component {

    render() {
        return (
            <div>

                {/* {this.props.data.map(Result => (
                    <ResultPanel
                        key={Result._id}
                        username={Result.username}
                        content={Result.content}
                        />
             ))} */}
                <ResultPanel />
                <ResultPanel />
                <ResultPanel />
                <ResultPanel />
            </div>
        );
    };

}