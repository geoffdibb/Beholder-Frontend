import React from 'react';

import AssociatePannel from './AssociatePannel'

export default class AssociateList extends React.Component {

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
                <AssociatePannel />
                <AssociatePannel />
            </div>
        );
    };

}