import React,{Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/login.js";
import SignUp from "./components/signup.js";
import FsignUp from "./components/facultysignhup.js";
import Flogin from "./components/facultylogin.js";
import Navigation from "./components/Navigation.js";
import Sdash from "./components/Sdash.js";
import Fdash from './components/Fdash.js';
import New  from './components/New.js';
import Sview from './components/Sview';
import StudentView from './components/StudentView';
import Studentupload from './components/Studentupload';
class App extends Component{
  render(){
  return (
    <div>
    <Router>
      <Navigation />
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/sign-in1" component={Flogin} />
            <Route path="/sign-up1" component={FsignUp} /> 
            <Route path="/faculty"   component={Fdash} /> 
            <Route path="/student"   component={Sdash} /> 
            <Route path="/New"       component={New} />
            <Route path="/Sview"      component={Sview} />
            <Route path="/StudentView"   component={StudentView} />
          <Route path="/Studentupload" component={Studentupload} />
      </Switch>
        </Router>
      </div>
  );
}
}

export default App;