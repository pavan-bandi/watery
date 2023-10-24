const mongoose = require("mongoose")
mongoose.Promise = global.Promise;

const waterSchema = new mongoose.Schema({
    roomNo:{
        type: String,
        required: true
    },
    romeMates:[
        {
            type: mongoose.Schema.ObjectId,
            ref: 'user'
        }
    ],
    waterQuotes:[
        {
            type: String
        }
    ],
    burriedUsers : [
        {
            type : mongoose.Schema.ObjectId,
            ref : 'user'
        }
    ]
    
});
module.exports = mongoose.model('Water', WaterSchema);