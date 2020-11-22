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
    let {id} = req.params;
    User.findById(id).then((user) => {
        res.send(user);
    })
})
// update user
router.update('/:id',(req,res) => {
    let {id} = req.params;
    let {username,name,password} = req.body;
    User.findByIdAndUpdate(id,{
        username,
        name,
        password
    }).then(() => {
        res.send({msg:'Account Information was successfully updated!'});
    })
})
// delete current user
router.delete('/:id',(req,res) => {
    let {id} = req.params;
    User.findByIdAndDelete(id).then((user) => {
        res.send('Your account was deleted')
    })
})
// get all users
router.get('/',(req,res) => {
    User.find({}).then((user) => {
        res.send(user);
    })
})
module.exports = router;