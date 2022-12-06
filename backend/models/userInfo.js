const mongoose=require("mongoose");

const userInfoSchema=new mongoose.Schema({
    userName:{
        type:String,
        unique:true,
        require:true,

    },

    phoneNumber:{
        type:Number,
        require: true,
        min:11,
        unique: true
    },
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

module.exports=mongoose.model("userInfo",userInfoSchema);