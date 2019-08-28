import React from 'react';

import ResultPanelCitizen from './ResultPanelCitizen'
import ResultPanelCar from './ResultPanelCar'

export default class ResultList extends React.Component {

    selectProfile = (result) => {
        this.props.selectProfile(result);
    }


    renderCarList(response, index) {
        return (
            <ResultPanelCar
                key={index}
                forenames={response.forenames}
                surname={response.surname}
                carReg={response.carReg}
                result={response}
                selectProfile={this.selectProfile}
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
                selectProfile={this.selectProfile}
            />
        )
    }

    render() {
        var list = <div />
        if (this.props.category === "Car Reg") {
            list = <div>
                {this.props.searchResults.map((response, index) => (
                <ResultPanelCar
                key={index}
                forenames={response.forenames}
                surname={response.surname}
                carReg={response.carReg}
                result={response}
                selectProfile={this.selectProfile}
            />
                ))}
            </div>
        }
        if (this.props.category === "Forenames" || this.props.category === "Surname") {
            list = <div>
                {this.props.searchResults.map(Result => (
                    <ResultPanel
                        key={Result.index}
                        forenames={Result.forenames}
                        surname={Result.surname}
                        homeAddress={Result.homeAddress}
                        result={Result}
                        selectProfile={this.props.selectProfile}
                    />
                ))}
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