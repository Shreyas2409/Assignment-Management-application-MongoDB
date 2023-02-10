import React, {Component } from "react";
import Ssidebar from "./Ssidebar.js";
import axios from 'axios';



export default class Sview extends Component {
constructor(props)
{
    super(props);
    this.state={
    data:[],
    };
}

    componentDidMount() {
        let axiosConfig = {
            headers: {
                'Content-Type': 'multipart/form-data',
                "Access-Control-Allow-Origin": "*",
            }
        };
        axios.get("/api2/sdata", axiosConfig)
            .then((response) => {
                const data = response.data;
                this.setState({ data })
                console.log(data);
            }
            )
            .catch(err => alert(err));
    }
render(){
    return (
        <div className="App">
        <Ssidebar />
            <header className="App-header">
                <h2>Student</h2>
            </header>
            <div className="user-container">
                {this.state.data.map(list => <h5 className='info-item'>Name:{list.name}</h5>)}
                {this.state.data.map(list => <h5 className='info-item'>USN:{list.regno}</h5>)}
                {this.state.data.map(list => <h5 className='info-item'>Semester:{list.sem}</h5>)}
                {this.state.data.map(list => <h5 className='info-item'>Branch:{list.branch}</h5>)}
                {this.state.data.map(list => <h5 className='info-item'>Section:{list.section}</h5>)}
                
            </div>
        </div>
    );
}

}