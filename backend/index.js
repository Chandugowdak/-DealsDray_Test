const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
const  LoginModel = require('./model/TableLogin'); //THIS IS FOR REGISTRATION FORM
const  EmployeeData  = require('./model/EmployeeList');

app.use(express.json()); //THIS WILL TRANSFER THE DATA TO BACKEND IN JSON FORMET SO THIS IS AN MIDDLEWARE
app.use(cors()) //THIS IS AN MIDDLEWARE

mongoose.connect("mongodb://127.0.0.1:27017/TableLogin")
.then(()=>console.log("Connected"))
.catch(()=>console.log("Not Connected"))

// Correcting the backend route and field names
app.get('/register', async(req, res) => {
    const { username, password } = req.body;  // Make sure 'username' is the correct field name

    try {
        const user = await LoginModel.findOne({ username: username });  // Assuming 'username' field in the DB
        if (user) {
            if (user.password === password) {
                return res.json("Success");
            } else {
                return res.json("Password is incorrect");
            }
        } else {
            return res.json("User not found");
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json("Server error");
    }
});



//POSTING THE DATA FROM THE REG FORM
app.post('/register',async(req,res)=>{
    LoginModel.create(req.body)   //TAKING THE DATA FROM THE USER 
    .then((employe)=>res.json(employe))   //IF DATA FOUND SEND TO FRONTEND
    .catch((err)=>res.json(err)); //IT NOT FOUND RETURN ERROR

})



//THIS IS FOR THE EMPLOYE DATA
app.post('/employe' , async(req,res)=>{
    EmployeeData.create(req.body)   //TAKING THE DATA FROM THE USER
    .then((emp)=>res.json(emp))   //IF NO ERROR 
    .catch((err)=>res.json(err)) ; //IF THERE IS ANY ERROR
})


//GETTING THE DATA FROM THE EMPLOYE TABLE
app.get('/employe', async(req,res)=>{
    try {
        const employees = await LoginModel.find();  // Fetch data from the database
        res.json(employees);  // Send data to the frontend
    } catch (err) {
        res.status(500).json({ message: "Error fetching employee data" });
    }
})

app.listen(3000,()=>{
    console.log(`Server is Running in the port ${3000}`)
})




