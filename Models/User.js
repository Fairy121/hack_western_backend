const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:{
        type:String,
        trim:true,
        min:[3,'Username must be 3 characters or more'],
        required:true
    },
    password:{
        type:String,
        trim:true,
        min:[5,'Password must be 5 characters or more'],
        required:true
    },
    name:{
        type:String,
        trime:true,
        required:true
    }

})
const User = mongoose.model('User',UserSchema);
module.exports = User;