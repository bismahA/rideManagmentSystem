const express = require('express');

const mongoose = require('mongoose')
const UserSchema=new mongoose.Schema({
    name:{
        type: String,
        
    },
    phoneNumber:{
        type: Number,
        
    },
    currentLocation:{
        type: String,
        
    },
    rideType:{
        type:String,
        
    },
    destination:{
       type:String,
    
    },
    distance:{
    type:String,

    },
    fare:{
        type:String,
        
    },
    travelTime:{
        type: String,
        
    }
});

const UserModel = mongoose.model("AcceptedRides", UserSchema)

module.exports=UserModel;