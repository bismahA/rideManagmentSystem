const express=require( 'express');
const addRequest=require('../controller/user-controller.js');
const getRequestLog=require('../controller/user-controller.js');
    


//const router = express.Router();
const router = require("express").Router();

router.post('/add', addRequest);
router.get('/all', getRequestLog);



module.exports=router;