import React from 'react';
import ResultPannel from './ResultPannel'

export default class ResultPage extends React.Component {

    render() {
        return (
            <div>
                Results
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