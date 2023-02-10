const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 8000;
const cors = require('cors');
const mongoose = require('mongoose');
const router = express.Router();
const Grid = require('gridfs-stream');
require('dotenv').config();

app.use(express.static(path.join(__dirname, "uploads")));
app.use(express.static(path.join(__dirname, "uploads1")));
app.use('/uploads',express.static('uploads'));
app.use('/uploads1', express.static('uploads1'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(cors());
app.options("*", cors());
app.use(session({
    secret: '039399232003030',
    resave: true,
    saveUninitialized: true
}));
const database = process.env.MONGO_API;
let gfs;

mongoose.connect(database,{ useNewUrlParser: true , useUnifiedTopology: true })
const connection=mongoose.connection;
connection.once('open',()=>{
    gfs = Grid(connection.db, mongoose.mongo)
    gfs.collection('imageUpload')
    console.log("MongoDB database connection established successfully");
})
mongoose.Promise = global.Promise;
app.use('/api', require('./routes/faculty'));
app.use('/api2', require('./routes/student'));
app.use('/api3', require('./routes/assignment'));
app.use('/api4',require('./routes/studentupload'));

// Listen on enviroment port or 8000
app.listen(port, () => console.log(`Listening on port ${port}`));
