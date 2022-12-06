const router=require("express").Router();
const fareInfo = require("../models/fareInfo");
const user=require("../models/userInfo");
//const ride=require("../models/rideInfo");

var foundUser=new user;
var totalFare=0;
var totalTime=0;
//const currentRide=new currentRide;
 
//getting fare info by ride info
router.get("/", async(req,res)=>{
    
    try{

       const currentUser=await user.findOne({userName:req.body.userName});
       // currentRide=await ride.findOne({createdAt: currentUser.createdAt});
       // const savedRide=await newRide.save();
       
        res.status(200).json(currentUser);
        foundUser=currentUser;
    }catch(err){
        res.status(500).json(err);
    }
})

function calculateFareInfo()
{
    var distance=foundUser.distance;
    var distanceFound=distance.replace(/\D/g,'');

    var fare=distanceFound*100;
    totalFare=`PKR ${fare}`;

    var time=distanceFound*1
    totalTime=`${time} Hrs`;
}

//setting fare info by ride info

//const fare=currentRide.currentRide.
router.post("/", async(req,res)=>{

    const currentUser=await user.findOne({userName:req.body.userName});
    foundUser=currentUser;
    calculateFareInfo();

    const newFare=new fareInfo({
        name:foundUser.userName,
        fare:totalFare,
        travelTime:totalTime
    });
    try{

        const savedFare=await newFare.save();
        res.status(200).json(savedFare);
    }catch(err){
        res.status(500).json(err);
    }
})


module.exports=router;