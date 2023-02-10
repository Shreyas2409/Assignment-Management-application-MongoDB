const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Facalty= new Schema({
    
    name:{type:String,required:true,},
    college: { type: String, required: true},
    email: { type: String, required: true, },
    password: { type: String, required: true }
    
})
const Fac = mongoose.model('facalty', Facalty);

module.exports = Fac;
