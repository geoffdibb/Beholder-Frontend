import React from 'react';

import ResultPanelCitizen from './ResultPanelCitizen'
import ResultPanelCar from './ResultPanelCar'

export default class ResultList extends React.Component {

    renderCarList(response, index) {
        return (
            <ResultPanelCar
                key={index}
                forenames={response.forenames}
                surname={response.surname}
                carReg={response.carReg}
                result={response}
                selectProfile={this.props.selectProfile}
            />
        )
    }
    renderCitizenList(response, index) {
        return (
            <ResultPanelCitizen
                key={index}
                forenames={response.forenames}
                surname={response.surname}
                homeAddress={response.homeAddress}
                result={response}
                selectProfile={this.props.selectProfile}
            />
        )
    }

    render() {
        var list = <div />
        if (this.props.category === "carReg") {
            list = <div>
                {this.props.searchResults.map(this.renderCarList)}
            </div>
        }
        if (this.props.category === "name") {
            list = <div>
                {this.props.searchResults.map(this.renderCitizenList)}
            </div>
        }
        return (
            <div>
                {list}
                {/* {this.props.searchResults.map(Result => (
                    <ResultPanel
                        key={Result.index}
                        forenames={Result.forenames}
                        surname={Result.surname}
                        homeAddress={Result.homeAddress}
                        result={Result}
                        selectProfile={this.props.selectProfile}
                    />
                ))} */}

            </div>
        );
    };

}