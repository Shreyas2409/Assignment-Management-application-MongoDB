import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Ssidebar from "./Ssidebar.js";
import Sview from './Sview'
class Sdash extends Component {
    render() {
        return (
            <div>
                <Ssidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                <Sview />
            </div>
        );
    }
}

export default Sdash;