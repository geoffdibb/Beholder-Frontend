import React from 'react';
import NavigationBar from './NavigationBar';
import { Route } from "react-router-dom";
import {
    Row,
    Col
} from 'reactstrap';
import axios from 'axios';


import MapPage from './Search/Results/MapPage';
import Profile from './Search/Results/Citizen/Profile';
import ResultPage from './Search/Results/ResultPage';
import SearchPage from './Search/SearchPage';
import Audit from './Audit';

export default class Homepage extends React.Component {

    constructor() {
        super()
        this.state = {
            category: "",
            searchTerm: "",
            searchResults: [
                {_id: 1234, forenames: "Aaron", surname: "Smith", homeAddress: "123 Street, London, W1 1AA", phoneNumber:"0208123456", age:"29", dateOfBirth:"1990/01/01", citizenId:"123413r1f112e", placeOfBirth:"Hospital", carReg:"AY12 QWE"},
                {_id: 1234, forenames: "John", surname: "Jaxon", homeAddress: "987 Avenue, Manchester, M9 9ZZ", phoneNumber:"0161123456", age:"28", dateOfBirth:"1991/01/01", citizenId:"408gh239gh298fh", placeOfBirth:"Home", carReg:"PI12 MNB"}
        ],
            profileData: ""
        };

    }

    search = (category, searchTerm) => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': this.props.apitoken
        }
        console.log(category);
        console.log(searchTerm);
        this.setState({
            category: category,
            searchTerm: searchTerm
        })
        console.log(headers);
        axios.get("http://localhost:5001/search/" + this.props.username + "/" + category + "/" + searchTerm, { headers })
            .then(response => {
                console.log(response.data);
                console.log(response.data.message);
                this.setState({
                    searchResults: response.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    selectProfile = (result) => {
        console.log(result);
        this.setState({
            profileData: result
        })
    }

    render() {
        return (
            <div>
                <Row>
                    <Col md='12'>
                        <NavigationBar />
                    </Col>
                </Row>
                <Row>
                    <Col md='1'></Col>
                    <Col md='10'>
                        <Route path="/MapPage" component={MapPage} />

                        <Route path="/Profile" render={() => <Profile search={this.search} profileData={this.state.profileData} />} />

                        <Route path="/Results" render={() => <ResultPage search={this.search} searchResults={this.state.searchResults} selectProfile={this.selectProfile} />} />

                        <Route exact path="/" render={() => <SearchPage search={this.search} />} />

                        <Route path="/Audit" component={Audit} />
                    </Col>
                    <Col md='1'></Col>
                </Row>
            </div>
        );
    };

}