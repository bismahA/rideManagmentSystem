const router=require("express").Router();
const rideInfo = require("../models/rideInfo");
 
//creating customers ride info request
router.post("/", async(req,res)=>{
    const newRide=new rideInfo(req.body);
    try{

        const savedRide=await newRide.save();
        res.status(200).json(savedRide);
    }catch(err){
        res.status(500).json(err);
    }
})

//getting customer's ride info
// router.get("/", async(req,res)=>{
    
//     try{

//         const user=await userInfo.find();
//         res.status(200).json(user);
//     }catch(err){
//         res.status(500).json(err);
//     }
// })


module.exports=router;






// import express from 'express';

// // const express = require('express');
// const router = express.Router();

// // provide todo route implementation here

// router.get('/', (req, res) => {
//     res.send('Root endpoint of of TODO route')
// })

// export default router;

// // module.exports = router;