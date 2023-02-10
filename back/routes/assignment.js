const express = require('express');
const router2 = express.Router();
const Assignmodel = require('../models/assignmentdb');
const multer = require("multer");
const GridFsStorage = require('multer-gridfs-storage');


/*
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`);
    }
}); const upload = multer({
    storage
});
*/
let storage = new GridFsStorage({
    url: process.env.MONGO_API,
    file: (req, file) => {
        return new Promise(
            (resolve, reject) => {
                const fileInfo = {
                    filename: file.originalname,
                    bucketName: "imageUpload"
                }
                resolve(fileInfo)

            }
        )
    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`);
    }
})
const upload = multer({ storage })

router2.route('/upload').post(upload.single('file'),(req, res, next) => {
    const url = req.protocol + '://' + req.get('host');
    const name = req.body.name;
    const sub = req.body.sub;
    const sem = req.body.value;
    const branch = req.body.branch;
    const section = req.body.section;
    const chapter = req.body.chapter;
    const topic = req.body.topic;
    const file = req.file.filename;
    const date = req.body.date;
    const assign = new Assignmodel({
        name,
        sub,
        sem,
        branch,
        section,
        chapter,
        topic,
        file,
        date,
    });
    assign.save()
        .then(() => res.json({ redirect: '/New' }))
        .catch(err => res.status(400).json('Error' + err));
});
module.exports = router2;