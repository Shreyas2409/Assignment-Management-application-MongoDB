const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Assign = new Schema({
    name: { type: String, required: true },
    sem: { type: Number, required: true },
    branch: { type: String, required: true },
    section: { type: String, required: true },
    sub: { type: String, required: true },
    chapter: { type: String, required: true },
    topic: { type: String, required: true },
    file: { type: String, required: true },
    date: { type: String, required: true }

})
const Assignmodel = mongoose.model('assign', Assign);

module.exports = Assignmodel;