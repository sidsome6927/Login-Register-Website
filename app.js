const express = require("express");
const app = express();
const port = 80;
const path = require("path");
const hbs = require('hbs');
require("./src/db/conn")
const Register = require("./src/models/registers")

const static_path = path.join(__dirname , "./public");
const views_path = path.join(__dirname , "./views");
const layout_path = path.join(__dirname, "./views/layouts")
const partials_path = path.join(__dirname, "./views/partials")

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(express.static(static_path))
app.set('view engine', 'hbs')
app.set('views' ,layout_path)

hbs.registerPartials(partials_path)


app.set('views' ,layout_path)
app.get("/",(req,res)=>{
    
    res.render('index')
})

app.get("/register" ,   (req,res) =>{
    res.render("register")
})
app.post("/register" , async(req,res) =>{
   try{
   const password = req.body.password;
   const confirmpassword = req.body.confirmpassword;
   if(password ===confirmpassword)
   {
       const registerEmployee = new Register({
           firstname : req.body.firstname ,
           secondname:req.body.secondname ,
           email : req.body.email ,
           gender : req.body.gender ,
           phone : req.body.phone ,
           age : req.body.age ,
           password : req.body.password ,
           confirmpassword : req.body.confirmpassword
       })
        const savedData = await registerEmployee.save()
        res.status(200).render('index')

   }else{
       res.send("password are not matching")
   }
   }catch(err){res.status(400).send(err)}
    
})

app.get("/login" , (req,res) =>{
    res.render("login")
})

app.post("/login" ,  async(req,res) =>{
    try{
        const email = req.body.email;
        const password = req.body.password;
        const userEmail = await Register.findOne({email:email})
        if(userEmail.password ===password)
        {
            res.render("index")
        }else{
            res.send("Invalid Login Details")
        }
   
    }catch(err){res.status(400).send("Invalid Email")}
})

app.listen(port , () =>{
    console.log(`This server is running on port ${port}`)
})