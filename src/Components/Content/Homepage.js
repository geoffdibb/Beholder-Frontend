import React from 'react';
import NavigationBar from './NavigationBar';
import { Route } from "react-router-dom";
import {
    Row,
    Col
} from 'reactstrap';
import axios from 'axios';

import Profile from './Search/Results/Citizen/Profile';
import ResultPage from './Search/Results/ResultPage';
import Audit from './Audit';

export default class Homepage extends React.Component {

    constructor() {
        super()
        this.state = {
            category: "",
            searchTerm: "",
            searchResults: [],
            profileData: ""
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
                this.setState({
                    searchResults: response.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    selectProfile = (result) => {
        // const headers = {
        //     'Content-Type': 'application/json',
        //     'Authorization': this.props.apitoken
        // }
        this.setState({
            profileData: result
        });
        // axios.get("http://localhost:5001/search/" + this.props.username + "/getassociates/" + result.citizenId, { headers })
        //     .then(response => {
        //         this.setState({
        //             associates: response.data
        //         })
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
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

                        <Route path="/Profile" render={() => <Profile search={this.search} profileData={this.state.profileData} />} />

                        <Route path="/Results" render={() => <ResultPage search={this.search} searchResults={this.state.searchResults} selectProfile={this.selectProfile} />} />

                        <Route exact path="/" render={() => <ResultPage search={this.search} searchResults={this.state.searchResults} selectProfile={this.selectProfile} />} />

                        <Route path="/Audit" render={() => <Audit username={this.props.username} apitoken={this.props.apitoken} />} />
                    </Col>
                    <Col md='1'></Col>
                </Row>
            </div>
        );
    };

}