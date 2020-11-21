const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    title:{
        type:String,
        trim:true,
        min:[3,'Username must be 3 characters or more'],
        required:[true,'Please enter a goal title']
    },
    description:{
        type:String,
        trim:true,
        required:[true,'Please enter a description']
    },
   

})
const User = Schema.model('User',UserSchema);
export default User;