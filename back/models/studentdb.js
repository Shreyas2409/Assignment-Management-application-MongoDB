const mongoose = require('mongoose');

const Student = mongoose.Schema({

    name: { type: String, required: true },
    college: { type: String, required: true },
    sem: { type: Number, required: true },
    regno: { type: String, required: true,unique: true},
    branch: { type: String, required: true },
    section: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String, required: true, },
    password: { type: String, required: true }

})
const Stumodel = mongoose.model('student', Student);

module.exports = Stumodel