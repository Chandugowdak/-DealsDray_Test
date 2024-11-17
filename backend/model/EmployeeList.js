const mongoose = require('mongoose');


const EmployeeListSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    address: String,
    salary: Number,
    date: String,
    time: String,
    status: String,
    role: String,
    image: String
})

const EmployeeList = mongoose.model("EmployeeData" , EmployeeListSchema);

module.exports = EmployeeList;