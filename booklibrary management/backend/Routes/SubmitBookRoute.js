const express=require('express');
const SubmitRoute=express.Router();
let SubmitBook=require('../Models/IssueBookModel');
SubmitRoute.route("/save").post((req,res)=>{
    let submitbook=new SubmitBook(req.body);
    submitbook.save().then(submitbook=>{
        res.status(200).json({'submitbook':'Registration Successfull'});
    }).catch(err=>{
        res.status(400).send('Registration Failed');
    });
});
module.exports=SubmitRoute;