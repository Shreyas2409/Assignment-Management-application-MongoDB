import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Fsidebar from "./Fsidebar.js";
//import Ssidebar from "./Ssidebar.js";
class Fdash extends Component {
    render() {
        return (
            <div>
    <Fsidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        </div>
        );
    }
}

export default Fdash;