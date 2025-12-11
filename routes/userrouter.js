const path=require('path');


const express=require('express');

const userrouter=express.Router();


const { registerhomes } = require('./hostrouter');

userrouter.get("/",(req,res,next)=>{
  console.log(registerhomes);
res.render('home',{registerhomes:registerhomes,pagetitle:'airbnb home'});
});

module.exports=userrouter;