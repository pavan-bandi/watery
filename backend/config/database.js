const mongoose = require('mongoose');
require('dotenv').config();
console.log(process.env.DB_URL)
console.log(process.env.PORT)

const connectDatabase=()=>{
    mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
  
      useUnifiedTopology: true,
    }) .then((data) => {
        console.log("Mongodb connected with server: ${data.connection.host}");
      });
  };
 
  module.exports = connectDatabase;

  