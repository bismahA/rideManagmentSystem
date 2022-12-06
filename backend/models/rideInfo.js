const mongoose=require("mongoose");

const rideInfoSchema=new mongoose.Schema({
    currentLocation:{
        type:String,
        require:true,

    },

    rideType:{
        type:String,
        require: true,
    },

    destination:{
        type:String,
        require:true,

    },

    distance:{
        type: String,
        require:true,
    }
},
{timestamps:true}
);

module.exports=mongoose.model("rideInfo",rideInfoSchema);