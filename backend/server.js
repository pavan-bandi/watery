const exp = require('express'); 
const app = exp();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const quotes = require('./api/quotes');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 
app.use("/quotes", quotes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error); 
});

app.use((error, req, res, next) => {  
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

app.listen(2001, ()=>{
    console.log("Server is running on port 2001");
});