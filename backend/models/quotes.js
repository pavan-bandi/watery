const mongoose = require("mongoose")
mongoose.Promise = global.Promise;

const quotes= new mongoose.Schema({
    quoteContent: {
        type: String,
        required: true
    },

    quoteAuthor: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
        required: true,
    },

    quoteLikes: {
        type: Number,
        default: 0,
    },

    quoteHearts: {
        type: Number,
        default: 0,
    },

    quoteKnife: {
        type: Number,
        default: 0,
    },
    
    quoteCreated: {
        type: Date,
        default: Date.now,
    },

    quoteDislikes: {
        type: Number,
        default: 0,
    }
});

module.exports = mongoose.model('Quotes', quotes);