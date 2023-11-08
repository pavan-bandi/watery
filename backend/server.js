require('dotenv').config()
const exp = require('express'); 
const app = exp();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const quotes = require('./routes/quotes');
const register = require('./routes/loginRegister');
const water = require('./routes/water');    
const connectDatabase=require("./config/database");
connectDatabase();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 
app.use("/", register);
app.use("/quotes", quotes);
app.use("/water", water);
require('dotenv').config();
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


app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});
