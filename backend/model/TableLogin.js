const mongoose = require("mongoose");


const LoginSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    conformpassword:String
  
})

const LogiModel = mongoose.model("LoginUser",LoginSchema); //collection name is Employees
module.exports = LogiModel; //EXPORTING THE MODEL 