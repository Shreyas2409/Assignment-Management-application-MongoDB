import React, { Component } from "react";
import {
    Col, Form,
    FormGroup, Label, Input,
    Button, Container,
} from 'reactstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ssidebar from "./Ssidebar.js";


class Studentupload extends Component {

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
            fname: '',
            sub: '',
            chapter: '',
            topic: '',
            file: '',
            date: '',

        };
        this.handelName=this.handelName.bind(this);
        this.handelSub = this.handelSub.bind(this);
        this.handelChapter = this.handelChapter.bind(this);
        this.handelTopic = this.handelTopic.bind(this);
        this.handelFile = this.handelFile.bind(this);
        this.handelUpload = this.handelUpload.bind(this);
    }
    handelName =async e => {
    await this.setState({
            fname: e.target.value,
        })
    }

    handelSub = async e => {
        await this.setState({
            sub: e.target.value,
        })
    }
    handelFile = async e => {
        await this.setState({
            file: e.target.files[0],
        })
    }
    handelChapter = async e => {
        await this.setState({
            chapter: e.target.value,
        })
    }
    handelTopic = async e => {
        await this.setState({
            topic: e.target.value,
        })
    }
    handelUpload = async e => {
        e.preventDefault();
        var formData = new FormData();
        formData.append('name', this.state.fname);
        formData.append('chapter', this.state.chapter);
        formData.append('topic', this.state.topic);
        formData.append('file', this.state.file);
        formData.append('date', this.state.date);
        let axiosConfig = {
            headers: {
                'Content-Type': 'multipart/form-data',
                "Access-Control-Allow-Origin": "*",
            }
        };
        axios.post("/api4/upload2", formData, axiosConfig)
            .then(function (response) {
                alert("uploaded")
                if (response.data.redirect === '/Studentupload') {
                    window.location = '/Studentupload';
                    }
                })
            .catch(err => alert(err));
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
                    <Form onSubmit={this.handelUpload} style={{

                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                    }} className="form">
                        <Col>
                            <FormGroup>
                                <Label>Name*</Label>
                                <Input
                                    type="text"
                                    name="fname"
                                    placeholder="faculty Name"
                                    required
                                    onChange={this.handelName}
                                />
                            </FormGroup>
                        </Col>
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
export default Studentupload;
