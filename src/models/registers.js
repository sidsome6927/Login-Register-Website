const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
    firstname : {
        type : String ,
        required : true
    },
    secondname : {
        type : String ,
        required : true
    },
    email : {
        type : String ,
        required : true
    },
    gender : {
        type : String ,
        required : true
    },
    phone : {
        type : Number ,
        required : true ,
        unique : true
    },
    age : {
        type : Number ,
        required : true
    },
    password: {
        type : String ,
        required : true
    },
    confirmpassword: {
        type : String ,
        required : true
    },
    

})

const Register = new mongoose.model("Register", employeeSchema)

module.exports = Register