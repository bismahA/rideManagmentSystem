//import express from 'express';
//module.exports = mongoose.model('Event', EventSchema);
const express = require('express');

const mongoose = require('mongoose')
const UserSchema=new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    phoneNumber:{
        type: Number,
        required:true,
    },
    currentLocation:{
        type: String,
        required:true,
    },
    rideType:{
        type:String,
        required:true,
    },
    destination:{
       type:String,
       required:true,
    },
    distance:{
    type:String,
    required:true,
    },
    fare:{
        type:String,
        required:true,
    },
    travelTime:{
        type: String,
        required:true,
    }
});

const UserModel = mongoose.model("seeusers", UserSchema)

//const users = [
  //  {
    //    name: 'John Doe',
      //  age: 25
    //}
//]

module.exports=UserModel;


// module.exports = router;