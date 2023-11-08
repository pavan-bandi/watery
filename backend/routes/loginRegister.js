const exp = require('express');

const mongoose = require('mongoose');
let users = require('../models/user');

const router = exp.Router();

router.post('/register', async (req, res, next) => {
    const val = req.body;
    const data = await users.find({
        email: val.email
    })
    if(data != undefined) {
        new users({val}).save()
            .then(() => res.json('user added'))
            .error(error => res.status(400).json('Error :' + error));
    }
});
module.exports = router;