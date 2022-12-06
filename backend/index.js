const express = require('express')
//import express from 'express'; 
//import bodyParser from 'body-parser';
const bodyParser = require('body-parser')
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const app = express();
const userInfoRoute=require("./routes/userInfoR");
const rideInfoRoute=require("./routes/rideInfoR");
const fareInfoRoute=require("./routes/fareInfoR");
const bookedRideRoute=require("./routes/bookedRideR");
const cors = require('cors');
const UserModel= require('./models/users')
const UserModel2=require('./models/confirm')
const UserModel3=require('./models/usersearch')
//import express from 'express'; // <-- Module Style import
const Routes=require('./routes/route.js');
const Connection=require('./database/db.js') ;

 //const bodyParser = require('body-parser')
 app.use(bodyParser.json({ limit: "30mb" , extended:true}));
 app.use(bodyParser.urlencoded({ limit: "30mb" , extended:true}));
//import dotenv from 'dotenv';
 //import cors from 'cors';
//import bodyParser from 'body-parser';
app.use(cors())


//import mongoose from 'mongoose';
// Importing user route
//import router from './routes/users.js';
// const router = require('router')


const port = 3001

dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("database connected");
})




// app.use(bodyParser.json())
// // Adding a Router
// app.use('/users', router);

// app.get('/', (req, res) => {
//     res.send('Hello Univers hjjjh to the world e!')
// })

// app.get('/todos', (req, res) => {
//     res.send('A list of todo items will be returned')
// })

// app.post('/', (req, res) => {
//     console.log(req.body)
//     res.send('Posting a Request')
// })
app.use("/api/userInfoR/", userInfoRoute);
app.use("/api/rideInfoR/", rideInfoRoute);
app.use("/api/fareInfoR/", fareInfoRoute);
app.use("/api/bookedRideR/", bookedRideRoute);
dotenv.config();
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());
app.use('/', Routes);
// const username= process.env.DB_USERNAME;
// const password= process.env.DB_PASSWORD;
// Connection(username,password);
app.get('/getUsers', (req, res) => {
    //res.send('Hello Universe hello hello 1 2 3 hello hello!')
    UserModel.find({}, (err,result) => {
      if(err)
      {
        res.json(err);
      }
      else{
        res.json(result);
      }
    })
})

//app.get('/todos', (req, res) => {
 //   res.send('A list of todo items will be returned')
//})

app.post('/createUser', async (req, res) => {
    //console.log(req.body)
   // res.send('Posting a Request')
   const user=req.body
   const newUser = new UserModel(user);
   await newUser.save();

   res.json(user)
})

app.post('/storeUser' , async (req,res) => {
  const user=req.body
   const newUser = new UserModel2(user);
   await newUser.save();

   res.json(user)
})


app.get("/searchuser/:id", async(req,res) => {
  const id=req.params.id;
  UserModel.findById(id, (err,result) => {
    if(err)
    {
      res.json(err);
    }
    else{
      res.json(result);
    }
  })
});
app.post('/adduser', async (req, res) => {
  //console.log(req.body)
 // res.send('Posting a Request')
 const user=req.body
 const newUser = new UserModel3(user);
 await newUser.save();

 res.json(user)
})
//NEW ADDED

app.post("/store/:id", async(req,res) =>  {
  UserModel.findById(req.params.id)
    .then(exercise => {
      exercise.name = req.body.name;
      exercise.phoneNumber = req.body.phoneNumber;
      exercise.currentLocation = req.body.currentLocation;
      exercise.rideType = req.body.rideType;
      exercise.destination=req.body.destination;
      exercise.distance=req.body.distance;
      exercise.fare=req.body.fare;
      exercise.travelTime=req.body.travelTime;
      
      //const user=req.body
   const newUser = new UserModel2(excercise);
   //await newUser.save();

   res.json(user)
     // exercise.save()
       // .then(() => res.json('Exercise updated!'))
       // .catch(err => res.status(3001).json('Error: ' + err));
    })
    //.catch(err => res.status(3001).json('Error: ' + err));
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})