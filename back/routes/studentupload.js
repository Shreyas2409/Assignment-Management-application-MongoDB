const express = require('express');
const router3 = express.Router();
const multer = require("multer");
const GridFsStorage = require('multer-gridfs-storage');
const Stuploadmodel = require('../models/studentuploaddb'); 
/*
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads1");
    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`);
    }
}); const uploads1 = multer({
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
const uploads1 = multer({ storage })
router3.route('/upload2').post(uploads1.single('file'), (req, res) => {
    //const url = req.protocol + '://' + req.get('host');
    const name = req.body.name;
    const sub = req.body.sub;
    const chapter = req.body.chapter;
    const topic = req.body.topic;
    const file = req.file.filename;
    const date = req.body.date;

    const regno = req.session.regno;
    const stupload = new Stuploadmodel({
        name,
        regno,
        sub,
        chapter,
        topic,
        file,
        date,
    });
    stupload.save()
        .then(() => res.json({ redirect: '/Studentupload' }))
        .catch(err => res.status(400).json('Error' + err));

});
module.exports = router3; //exporting the router