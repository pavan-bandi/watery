const exp = require('express');

const mongoose = require('mongoose');
let users = require('../models/user');

const router = exp.Router();

router.post('/register', async (req, res, next) => {
    const val = req.body;
    console.log(val);
    const data = await users.find({
        email: val.email
    })
    console.log(data)
    if(data.length==0) {
        new users(val).save()
            .then(() => res.json('user added'))
            .catch(error => res.status(400).json('Error :' + error));
    }
});

router.post('/login', async (req, res, next) => {
    const val=req.body;

    const data=await users.find({email:val.email},{password:1})
    if (data.length==0){
        res.json('user not found');
    }
   
console.log(data[0].password);
console.log(val.password);
    (data[0].password===val.password)?res.json('user logged in succefully'):res.status(500).json('wrong password');})
    
module.exports = router;