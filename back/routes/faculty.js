const express = require('express');
const router = express.Router();
const Fac= require('../models/facultydb');

router.route('/post1').post((req, res, next) => {
    const name =req.body.name;
    console.log(name);
    const college=req.body.college;
    const email = req.body.email;
    const mobile= req.body.mobile;
    const password=req.body.password;
    const facalty = new Fac({name,
    college,
    email,
    mobile,
    password,
});
facalty.save()
    .then(() => res.json({ redirect:'/sign-in1'}))
.catch(err =>res.status(400).json('Error'+ err ));
});

router.route('/login1').post((req, res) => {
    
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    req.session.name = name;
    console.log(name)
    Fac.find({name:name,email:email,password:password})
        .then((result) => {
            
            res.json({redirect:'/faculty'});
        })
        .catch((err) => {
            res.status(500).json({ success: false, msg: `Something went wrong. ${err}` });
        });
});


module.exports = router;