import React, { Component } from "react";
import {
    Col, Form,
    FormGroup, Label, Input,
    Button, Container,  
} from 'reactstrap';
import axios from  'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fsidebar from "./Fsidebar.js";


class New extends Component{

    componentDidMount() {
        this.getDate();
    }

    getDate = () => {
        var date = new Date().toDateString();
        this.setState({ date });
    };
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            sub: '',
            value: '',
            branch:'',
            section:'',
            chapter:'',
            topic:'',
            file:'',
            date:'',
            
        };
        this.handelSub = this.handelSub.bind(this);
        this.handelSem = this.handelSem.bind(this);
        this.handelBranch = this.handelBranch.bind(this);
        this.handelSection = this.handelSection.bind(this);
        this.handelChapter = this.handelChapter.bind(this);
        this.handelTopic = this.handelTopic.bind(this);
        this.handelFile = this.handelFile.bind(this);
        this.handelUpload = this.handelUpload.bind(this);
        }

    handelSub = async e => {
        await this.setState({
            sub: e.target.value,
        })
    }
    handelSem = async e => {
        await this.setState({
            value: e.target.value,
        })
    }
    handelBranch = async e => {
        await this.setState({
            branch: e.target.value,
        })
    }
    handelSection = async e => {
        await this.setState({
            section: e.target.value,
        })
    }
    handelFile = async e => {
        await this.setState({
            file: e.target.files[0],
        })
    }
    handelChapter = async e => {
        await this.setState({
        chapter : e.target.value,
        })
    }
    handelTopic = async e => {
        await this.setState({
            topic : e.target.value,
        })
    }
    handelUpload = async e => {
        e.preventDefault();
        const name = localStorage.getItem("name");
        console.log(name);
        this.setState({ name });
        var formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('sub', this.state.sub);
        formData.append('value', this.state.value);
        formData.append('branch', this.state.branch);
        formData.append('section', this.state.section);
        formData.append('chapter',this.state.chapter);
        formData.append('topic',this.state.topic);
        formData.append('file', this.state.file);
        formData.append('date', this.state.date);
        let axiosConfig = {
            headers: {
                'Content-Type': 'multipart/form-data',
                "Access-Control-Allow-Origin": "*",
            }
        };
        axios.post("/api3/upload",formData, axiosConfig)
            .then(function (response) {
                alert("uploaded")
                if (response.data.redirect === '/New') {
                    window.location = '/New';
                }
            })
            .catch(err => alert(err.data));
    }
    render() {
        return (
            <div style={{
                display: 'flex',
                alignitems: 'center',
                justifyContent: 'center',
            }}>
                <Fsidebar />
                <Container>
                    <Form onSubmit={this.handelUpload} style={{

                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                    }} className="form">
                        <Col>
                            <FormGroup>
                                <Label>Subject</Label>
                                <Input
                                    type="text"
                                    name="sub"
                                    placeholder="subject"
                                    required
                                    onChange={this.handelSub}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <label>
                                Semester
                                    <select value={this.state.value} onChange={this.handelSem}>            
                                        <option value="1">1st</option>
                                        <option value="2">2nd</option>
                                        <option value="3">3rd</option>
                                        <option value="4">4th</option>
                                        <option value="5">5th</option>
                                        <option value="6">6th</option>
                                        <option value="7">7th</option>
                                        <option value="8">8th</option>
                                    </select>
                                </label>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label>Branch</Label>
                                <Input
                                    type="text"
                                    name="branch"
                                    placeholder="Branch"
                                    required
                                    onChange={this.handelBranch}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label>Section</Label>
                                <Input
                                    type="text"
                                    name="section"
                                    placeholder="Section"
                                    required
                                    onChange={this.handelSection}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label>Chapter</Label>
                                <Input
                                    type="text"
                                    name="chapter"
                                    placeholder="Chapter"
                                    required
                                    onChange={this.handelChapter}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label>Topic</Label>
                                <Input
                                    type="text"
                                    name="topic"
                                    placeholder="topic"
                                    required
                                    onChange={this.handelTopic}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label >File</Label>
                                <Input
                                    type="file"
                                    name="file"
                                    accept="application/pdf,application/vnd.ms-excel,application/vnd.ms-docs,image/jpg,image/png,image/jpeg"
                                    required
                                    onChange={this.handelFile}
                                />
                            </FormGroup>
                        </Col>
                        <Button>Upload</Button>
                    </Form>
                </Container>
            </div>
        );
    }
}
export default New;
