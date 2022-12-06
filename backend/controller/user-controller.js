const Requests=require('../models/user-schema.js');
const router = require("express").Router();

router.addRequest = async(request, response) =>
{
    const requestData = request.body;
   const newRequest = new Requests(requestData);

   try
   {
    await newRequest.save();  
    response.status(201).json(newRequest );
   }
   catch(error)
   {
    response.status(409).json({message: error.message});
    
   }

}

router.getRequestLog = async(request, response ) =>
{
    try
    {
    const RequestLog= await Requests.find({});
    response.status(200).json(RequestLog);
    }
    catch(error)
    {
     response.status(404).json({message: error.message});
     
    }
}

module.exports=router;