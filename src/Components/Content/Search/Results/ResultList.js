import React from 'react';

import ResultPannel from './ResultPannel'

export default class ResultList extends React.Component {

    render() {
        return (
            <div>

                {/* {this.props.data.map(Result => (
                    <ResultPannel
                        key={Result._id}
                        username={Result.username}
                        content={Result.content}
                        />
             ))} */}
                <ResultPannel />
                <ResultPannel />
                <ResultPannel />
                <ResultPannel />
            </div>
        );
    };

}