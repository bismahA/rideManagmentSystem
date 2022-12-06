const mongoose=require("mongoose");

const fareInfoSchema=new mongoose.Schema({
   name:{
    type:String,
    require:true,

   },
    fare:{
        type:String,
        require:true,

    },

    travelTime:{
        type:String,
        require: true,
    },
},
{timestamps:true}
);

module.exports=mongoose.model("fareInfo",fareInfoSchema);