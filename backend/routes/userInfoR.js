const router=require("express").Router();
const userInfo = require("../models/userInfo");
//const userInfo=require("../models/userInfo");
 
//creating customre's ride request
router.post("/", async(req,res)=>{
    const newUser=new userInfo(req.body);
    try{

        const savedUser=await newUser.save();
        res.status(200).json(savedUser);
    }catch(err){
        res.status(500).json(err);
    }
})

//getting customer's ride requests
router.get("/", async(req,res)=>{
    
    try{

        const user=await userInfo.find();
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
})


module.exports=router;


// import express from 'express';

// // const express = require('express');
// const router = express.Router();

// const users = [
//     {
//         name: 'John Doe',
//         age: 25
//     }
// ]

// router.get('/', (req, res) => {
//     res.send(users)
// })

// router.post('/', (req, res) => {
//     const user = req.body;
//     console.log(req.body);
//     res.send(`added into the DB`)
// })

// export default router;

// // module.exports = router;