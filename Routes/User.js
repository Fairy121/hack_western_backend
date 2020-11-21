let router = require('express').Router();
let User = require('../Models/User');

// create User
router.post('/',(req,res) => {
    const {username,password,name} = req.body;
    if(username === '' || password === '' || name === '') {
        return res.status(401).json({
            msg:'Hey you left a field blank'
        })
    } else {
        newuser = new User({
            username,
            password,
            name
        });
        newuser.save().then(() => {
            res.json({msg:'Your account was created'}).catch((err) => {
                console.log(err);
                res.status(400).json({ msg: "Account can't be created" });
            })
        })
    }
})

// get current user
router.get('/:id',(req,res) => {

})
// get all users
router.get('/',(req,res) => {
    res.send('User Route');
})
module.exports = router;