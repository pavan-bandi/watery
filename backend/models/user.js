const mongoose = require("mongoose")
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    collegeName:{
        type: String,
        required: true
    },
    branch:{
        type: String,
        required: true
    },
    hostelName:{
        type: String
    },
    roomNo:{
        type: String
    },
    quoteList:[
        {
            type: mongoose.Schema.ObjectId,
            ref: 'quotes'
        }
    ],
});

module.exports = mongoose.model('Users', userSchema);