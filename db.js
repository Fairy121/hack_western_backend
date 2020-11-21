let mongoose = require('mongoose');
let mongoDB = 'mongodb+srv://Fairy121:disney13@cluster0.h1oa6.mongodb.net/goalTracker'
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
