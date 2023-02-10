const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Stupload = new Schema({
    name: { type: String, required: true },
    regno:{ type: String, required: true},
    sub: { type: String, required: true },
    chapter: { type: String, required: true },
    topic: { type: String, required: true },
    file: { type: String, required: true },
    date: { type: String, required: true }

})
const Stuploadmodel = mongoose.model('stupload', Stupload);

module.exports = Stuploadmodel;