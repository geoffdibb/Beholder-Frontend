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

    // constructor() {
    //     super()
    //     this.state = {
    //         category: "",
    //         searchTerm: "",
    //         searchResults: [
    //             { _id: 1234, forenames: "Aaron", surname: "Smith", homeAddress: "123 Street, London, W1 1AA", phoneNumber: "0208123456", age: "29", dateOfBirth: "1990/01/01", citizenId: "123413r1f112e", placeOfBirth: "Hospital", carReg: "AY12 QWE" },
    //             { _id: 9876, forenames: "John", surname: "Jaxon", homeAddress: "987 Avenue, Manchester, M9 9ZZ", phoneNumber: "0161123456", age: "28", dateOfBirth: "1991/01/01", citizenId: "408gh239gh298fh", placeOfBirth: "Home", carReg: "PI12 MNB" }
    //         ],
    //         profileData: "",
    //         associates: [
    //             {_id: 2345, associateId: 1, forenames: "Matt", surname: "Hunt", phoneCalls: 5, latestCall: "2019/08/23 12:01:32.312"},
    //             {_id: 4321, associateId: 2, forenames: "Henry", surname: "Mathews", phoneCalls: 15, latestCall: "2012/12/23 01:43:12.644"}
    //         ],
    //     };

    // }

        constructor() {
        super()
        this.state = {
            category: "",
            searchTerm: "",
            searchResults: [],
            profileData: "",
            associates: [],
        };

    }

    search = (category, searchTerm) => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': this.props.apitoken
        }
        this.setState({
            category: category,
            searchTerm: searchTerm
        })
        axios.get("http://localhost:5001/search/" + this.props.username + "/" + category + "/" + searchTerm, { headers })
            .then(response => {
                console.log(response.data);
                console.log(response.data.message);
                this.setState({
                    searchResults: response.data //need to complete with actual path
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    selectProfile = (result) => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': this.props.apitoken
        }
        console.log(result);
        this.setState({
            profileData: result
        });
        axios.get("http://localhost:5001/search/" + this.props.username + "/getassociates/" + result.citizenId, { headers })
            .then(response => {
                console.log(response.data);
                this.setState({
                    associates: response.data //need to complete with actual path
                })
            })
            .catch(error => {
                console.log(error);
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

                        <Route path="/Profile" render={() => <Profile search={this.search} profileData={this.state.profileData} associates={this.state.associates} />} />

                        <Route path="/Results" render={() => <ResultPage search={this.search} searchResults={this.state.searchResults} selectProfile={this.selectProfile} />} />

                        <Route exact path="/" render={() => <SearchPage search={this.search} />} />

                        <Route path="/Audit" render={() => <Audit username={this.props.username} apitoken={this.props.apitoken}/>} />
                    </Col>
                    <Col md='1'></Col>
                </Row>
            </div>
        );
    };

}