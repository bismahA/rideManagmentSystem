const router = require("express").Router();
const bookedRide = require("../models/bookedRides");
const fare = require("../models/fareInfo");
const user = require("../models/userInfo");

var userInfo = new user;
var fareInfo = new fare;

//creating customre's ride 
// router.post("/", async(req,res)=>{

//     try{

//         const currentUser=await user.findOne({userName:req.body.userName});
//         const currentFare=await fare.findOne({userName:req.body.userName});

//         const newBookedRide=new bookedRide({
//             name:currentUser.userName,
//             phoneNumber:currentUser.phoneNumber,
//             currentLocation:currentUser.currentLocation,
//             rideType:currentUser.rideType,
//             destination:currentUser.destination,
//             distance:currentUser.distance,
//             fare:currentFare.fare,
//             travelTime:currentFare.travelTime
//         });

//         const savedBookedRide=await newBookedRide.save();
//         res.status(200).json(savedBookedRide);
//     }catch(err){
//         res.status(500).json(err);
//     }
// })

router.post("/", async (req, res) => {

    // res.setHeader("Access-Control-Allow-Origin", "*")
    // res.setHeader("Access-Control-Allow-Credentials", "true");
    // res.setHeader("Access-Control-Max-Age", "1800");
    // res.setHeader("Access-Control-Allow-Headers", "content-type");
    // res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS")

    try {

      
        const bookRide = req.body;
        const newRide = new bookedRide(bookRide);
        await newRide.save();
        res.status(200).json(newRide);
    } catch (err) {
        res.status(500).json(err);
    }
})


//getting the history of booked rides of specific person
router.get("/", async(req,res)=>{

    bookedRide.find({name:req.body.name},(err,result)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
    
    // try{

    //    const historyFound=await bookedRide.find({name:req.body.name});
    //    // currentRide=await ride.findOne({createdAt: currentUser.createdAt});
    //    // const savedRide=await newRide.save();
       
    //     res.status(200).json(historyFound);
    //    // foundUser=currentUser;
    // }catch(err){
    //     res.status(500).json(err);
    // }
})


module.exports = router;
