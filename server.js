const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const passport = require("passport");
const user =require('./Routes/users')
const cors = require('cors')

const app= express();
app.use(cors())
// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());



const db = require('./config/mongoURI').mongoURI
//get router
const document =require('./Routes/document')


//connect to db
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true })
.then(()=> console.log("mongoDB connected "))
.catch(err=>console.log(err))

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);


// app.use('/contact',require('./Routes/contact'))
app.use('/users',user)


const port= process.env.PORT||5000
app.listen(port,()=>console.log(`server start in port ${port}`))

