const exp = require('express')
const mongoose = require('mongoose');
let quotes=require('../models/quotes');
const User = require('../models/user');
const router = exp.Router();
// app.get("/", (req, res, next) => {
//     res.status(200).json({
//         message: "Hello from server"
//     });
// });
// nhqjh

router.post("/add", async (req,res,next)=>{
    const quote=req.body;
   
    const user_id=await User.findOne({email:quote.quoteAuthor},{_id:1});
    

    new quotes({"quoteContent":quote.quoteContent,'quoteAuthor':user_id}).save().then((savedQuote)=>{
        
        User.findOne({ email: quote.quoteAuthor })
  .then((user) => {
    if (!user) {
      console.log("User not found with the provided email.");
      return;
    }

    user.quoteList.push(savedQuote._id);

    return user.save();
  })
  .then(() => {
    
    res.json("Quote added");
  })
  .catch((err) => {
   
    res.status(400).json("Error: " + err);
  });

    }).catch(error=>res.status(400).json("Error :"+error));


})



    router.get('/fetch-quotes',async  (req, res) => {
        await quotes.find()
          .then(data => res.json(data))
          .catch(error => res.status(400).json("Error: " + error));
      });

module.exports = router;