const mongoose = require('mongoose');
const connectDatabase=()=>{
    mongoose
    .connect("URI", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }) .then((data) => {
        console.log("Mongodb connected with server: ${data.connection.host}");
      });
  };
 
  module.exports = connectDatabase;