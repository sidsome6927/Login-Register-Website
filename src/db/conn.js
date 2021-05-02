const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/loginregistration',{
    useNewUrlParser : true ,
    useUnifiedTopology : true ,
    useCreateIndex : true })
    .then(() =>{console.log("connection is successful and you can proceed")})
    .catch((err) =>{console.log(err)})

