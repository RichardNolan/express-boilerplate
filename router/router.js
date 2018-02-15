const express = require('express');
const router_api = require('./router_api')
const router_view = require('./router_view')
const router = express.Router();


const regularVerification = (req,res,next)=>{
    console.log("Regular view - No verification necessary");
    next();
};

const apiVerification = (req,res,next)=>{
    console.log("Mock API Verification passed");
    next();
};

router.use('/api', apiVerification, router_api);
router.use('/', regularVerification, router_view);


module.exports = router;