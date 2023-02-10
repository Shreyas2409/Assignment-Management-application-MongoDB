import React, { Component } from 'react';
import axios from 'axios';
import { Container} from 'reactstrap';

import Ssidebar from "./Ssidebar.js";

export default class StudentView extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            files:[],
            filename: '',
        };

        
    }
        
componentDidMount() {
        let axiosConfig = {
            headers: {
                'Content-Type': 'multipart/form-data',
                "Access-Control-Allow-Origin": "*",
            }
        };
    
    axios.get("/api2/assigmnetview",axiosConfig)
    .then((response)=>{
        const data = response.data;
        this.setState({ data })
        console.log(data);

    })
.catch(err => alert(err));
    let axiosConfig1 = {
        headers: {
            'Content-Type': 'multipart/form-data',
            "Access-Control-Allow-Origin": "*",
            Accept: 'application/pdf'
        },
        responseType: 'arraybuffer',

    };
    axios.get("/api2/file", axiosConfig1)
        .then((result) => console.log(result))
        .catch(err => alert(err))
}


    
    render() {
        return (
            <div style={{
                display: 'flex',
                alignitems: 'center',
                justifyContent: 'center',
            }}>
                <Ssidebar />
        
                <Container>
                    <table >
                        <tr>
                            <th>Faculty Name</th>
                            <th>Subject</th>
                            <th>Semester</th>
                            <th>Branch</th>
                            <th>Section</th>
                            <th>Chapter</th>
                            <th>Topic</th>
                            <th>Assignment</th>
                            <th>Date</th>
                        </tr>
                        <td>
                            {this.state.data.map(list => <tr>{list.name}</tr>)}
                        </td>
                        <td>
                            {this.state.data.map(list => <tr>{list.sub}</tr>)}
                    </td>
                    <td>
                            {this.state.data.map(list => <tr>{list.sem}</tr>)}
                        </td>
                        <td>
                            {this.state.data.map(list => <tr>{list.branch}</tr>)}
                        </td>
                        <td>
                            {this.state.data.map(list => <tr>{list.section}</tr>)}
                    </td>
                    <td>
                            {this.state.data.map(list => <tr>{list.chapter}</tr>)}
                            </td>
                            <td>
                            {this.state.data.map(list => <tr>{list.topic}</tr>)}
                            </td>
                            <td>
                        {this.state.data.map(list =><tr>{list.file}</tr>)}
                        </td>
                        <td>
                            {this.state.data.map(list=><tr>{list.date}</tr>)}
                        </td>  
                    </table> 
                    </Container>
            </div>
        );
    }

}