import React from 'react';
import { FormGroup,Button, Label, Input } from 'reactstrap';
import axios from "axios";


export default class SearchForm extends React.Component {



    constructor() {
        super();
        this.state = {
            responseData: ""
        };
    }
// searchdb = ()=>{
//     console.log("Childfunctioncalled");
// }
searchdb =(e) => {
        e.preventDefault();
        let name = e.target[0].value;
                if (name === "") {
            this.setState({ message: "Please fill all fields" })
        } else {
            axios
                .get("http://localhost:8080/search/name/" + name)
                .then(response => {
                   this.setState({
                    responseData: (response.data)
                });
                    this.props.passedFunction();
                })
                .catch(err => { this.setState({ message: "name not found" }); });

        }
    }
componentDidMount() {
    this.props.onRef(this)
  }
  componentWillUnmount() {
    this.props.onRef(undefined)
  }




    render() {
        return (
            <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FormGroup>
                    <Label for="Category" hidden>Category</Label>
                    <Input type="select">
                        <option>Name</option>
                        <option>Location</option>
                        <option>Car Reg</option>
                        <option>Time</option>
                    </Input>
                </FormGroup>

                
                <FormGroup>
                    <Label for="Search" hidden>Search</Label>
                    <Input type="search" name="search" id="Search" placeholder="Search" />

                </FormGroup>

            </div>
            <div>
                  {/* <Button variant="Add Search Field">Add Search Field</Button> */}
                  <div/>

                </div>
                </div>
        )
    }
}