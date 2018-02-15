const express = require('express');
const router = express.Router();


const publicArea = (req,res,next)=>{
    console.log("Public Area Accessed");
    next();
};

const privateArea = (req,res,next)=>{
    console.log("Private Area Accessed");
    next();
};

router.use('/:name', privateArea, (req,res)=>{
    res.json({name:req.params['name']});
});

router.use('/', publicArea, (req,res)=>{
    res.render('../views/index.ejs', {title:"API Root"});
});

module.exports = router;