const exp=require('express');
const router=exp.Router();
let water=require('../models/water');
const User = require('../models/user');

router.post('/add',async(req,res,next)=>{
    const watery=req.body
    const users=await User.find({ email: { $in: watery.roomMates } }, { _id: 1})
    new water({'roomNo':watery.roomNo,'roomMates':users}).save().then(()=>{
       res.json('users added to water group')
    }).catch(error=>res.status(400).json("Error :"+error));

    
})

module.exports = router;