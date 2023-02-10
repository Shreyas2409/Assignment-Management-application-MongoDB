const express = require('express');
const router1 = express.Router();
const mongo = require('mongodb');
const Grid = require('gridfs-stream');
const Stumodel = require('../models/studentdb');
const Assignmodel = require('../models/assignmentdb');


router1.route('/post').post((req, res, next) => {
    const name = req.body.name;
    const college = req.body.college;
    const sem = req.body.value;
    const regno = req.body.regno;
    const branch = req.body.branch;
    const section = req.body.section;
    const email = req.body.email;
    const mobile = req.body.mobile;
    const password = req.body.password;
    console.log(name)
    const student = new Stumodel({
        name,
        college,
        sem,
        regno,
        branch,
        section,
        email,
        mobile,
        password,
    });
    student.save()
        .then(() => res.json({ redirect: '/sign-up' }))
        .catch(err => res.status(400).json('Error' + err));
});

router1.route('/login').post((req, res) => {

    const regno = req.body.regno;
    const email = req.body.email;
    const password = req.body.password;
    req.session.regno= regno;
    console.log(regno)
    Stumodel.find({ regno: regno, email: email, password: password })
        .then((result) => {

            res.json({ redirect: '/student' });
        })
        .catch((err) => {
            res.status(500).json({ success: false, msg: `Something went wrong. ${err}` });
        });
});

router1.route('/sdata').get((req,res)=>
{   const regno = req.session.regno;
    Stumodel.find({regno: regno})
    .then((result)=>
    {
        res.json(result)
    })
});
router1.route('/assigmnetview').get((req, res, next) => {
    const regno = req.session.regno;

    Stumodel.find({regno:regno})
        .then((results) => {
            const sem=results[0].sem;
            console.log(sem);
            const branch=results[0].branch;
            const section=results[0].section;
            req.session.sem= sem;
            req.session.branch= branch;
            req.session.section= section;
            Assignmodel.find({sem:sem,branch: branch,section: section})
            .then((result) =>{
                res.json(result);
                req.session.file = result[0].file;
            })
                .catch((err) => {
                    res.status(500).json({ success: false, msg: `Something went wrong. ${err}` });
                })
            })
        .catch((err) => {
            res.status(500).json({ success: false, msg: `Something went wrong. ${err}` });
        });
});

router1.route('/file').get((req, res)=>{
    const filename= req.session.file;
        console.log(filename);
        /*
        
        gfs.files.findOne({ filename: filename }, (err, file) => {
            if (!file || file.length == 0) {
                return res.status(404).json({
                    err: "No files exist"
                })
            }
            
            const readStream = gfs.createReadStream(file.filename)
            readStream.pipe(res)
        })
*/
    mongo.connect(process.env.MONGO_API, function (err, client) {
        if (err) {
            return res.render('index',
                {
                    title: 'Uploaded Error',
                    message: 'MongoClient Connection error', error: err.errMsg
                });
        }
        const assignment = 'assignment';
        const db = client.db(assignment);
        const collection = db.collection('imageUpload.files');
        const collectionChunks = db.collection('imageUpload.chunks');
    
    collection.find({ filename: fileName }).toArray(function (err, docs) {
        if (err) {
            return res.render('index', {
                title: 'File error',
                message: 'Error finding file',
                error: err.errMsg
            });
        }
        if (!docs || docs.length === 0) {
            return res.render('index', {
                title: 'Download Error',
                message: 'No file found'
            });
        } else {

            //Retrieving the chunks from the db          
            collectionChunks.find({ files_id: docs[0]._id })
                .sort({ n: 1 }).toArray(function (err, chunks) {
                    if (err) {
                        return res.render('index', {
                            title: 'Download Error',
                            message: 'Error retrieving chunks',
                            error: err.errmsg
                        });
                    }
                    if (!chunks || chunks.length === 0) {
                        //No data found            
                        return res.render('index', {
                            title: 'Download Error',
                            message: 'No data found'
                        });
                    }

                    let fileData = [];
                    for (let i = 0; i < chunks.length; i++) {
                        //This is in Binary JSON or BSON format, which is stored               
                        //in fileData array in base64 endocoded string format               

                        fileData.push(chunks[i].data.toString('base64'));
                    }

                    //Display the chunks using the data URI format          
                    let finalFile = 'data:' + docs[0].contentType + ';base64,'
                        + fileData.join('');
                    res.render('imageView', {
                        title: 'Image File',
                        message: 'Image loaded from MongoDB GridFS',
                        imgurl: finalFile
                    });
                });
        }
    });
});

});
module.exports = router1;