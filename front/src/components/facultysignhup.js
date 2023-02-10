import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import axios from 'axios'; 
import { Col, Form,
  FormGroup, Label, Input,
  Button,Container,
} from 'reactstrap';
export default class FsignUp extends Component {
  constructor(props){
    super(props);
  this.state={
    name:'',
    college:'',
    email:'',
    mobile:'',
    password:'',
  };
  this.handelName=this.handelName.bind(this);
  this.handelCollege=this.handelCollege.bind(this);
  this.handelEmail=this.handelEmail.bind(this);
  this.handelMobile= this.handelMobile.bind(this);
  this.handelPassword=this.handelPassword.bind(this);
  this.handelSubmit=this.handelSubmit.bind(this);
}

  handelName=  e =>{
    this.setState({
      name:e.target.value,
    })
  }
  handelCollege= async e =>{
    await this.setState({
      college:e.target.value,
    })
  }
  handelEmail= async e =>{
    await this.setState({
      email:e.target.value,
    })
  }
  handelMobile = async e => {
    await this.setState({
      mobile: e.target.value,
    })
  }
  handelPassword= async e =>{
        await this.setState({
      password:e.target.value,
    });
    } 
  handelSubmit= e =>{
    e.preventDefault();
  let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
  }
};
  axios.post("api/post1", JSON.stringify({"name":this.state.name,
  "college":this.state.college,
  "email":this.state.email,
  "mobile":this.state.mobile,
  "password":this.state.password,
  }),axiosConfig) 
.then(function (response) {
  console.log(response)
  if (response.data.redirect ==='/sign-in1') {
                window.location = "/sign-in1";
            }
        })
.catch(err =>alert(err));
  }


    render() {
        return (
          <div style={{
    display: 'flex',
    alignitems: 'center',
    justifyContent: 'center',
}}>

            <Card div style={{
    display: 'flex',
    alignitems: 'center',
    justifyContent: 'center',
    backgroundColor:'whitesmoke',
    width:'50%',
}}>
    <Card.Body>
    <Card.Title>Faculty Sign-Up</Card.Title>
    <Container>
    <Form  onSubmit={this.handelSubmit} style={{
  
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
}}className="form">
          <Col>
            <FormGroup>
              <Label>Name*</Label>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                required
                onChange={this.handelName}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>College*</Label>
              <Input
                type="text"
                name="college"
                placeholder="College"
                required
                onChange={this.handelCollege}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Email*</Label>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={this.handelEmail}
              />
            </FormGroup>
          </Col>
                    <Col>
                      <FormGroup>
                        <Label>Mobile*</Label>
                        <Input
                          type="text"
                          name="mobile"
                          placeholder="mobile"
                          required
                          onChange={this.handelMobile}
                        />
                      </FormGroup>
                    </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password*</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                required
                onChange={this.handelPassword}
              />
            </FormGroup>
          </Col>
          <Button align="center" onSubmit={this.handelSubmit} >Submit</Button>
        </Form>
        </Container>
</Card.Body>
</Card>
        </div> 
        );
    }
}