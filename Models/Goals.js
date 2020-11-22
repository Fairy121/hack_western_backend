const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoalSchema = new Schema({
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
const Goal = Schema.model('User',GoalSchema);
export default Goal;