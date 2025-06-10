const express=require('express');
const IssueRoute=express.Router(); 
let IssueBook=require('../Models/IssueBookModel.js');

IssueRoute.route("/save").post((req,res)=>{
    let issuebook=new IssueBook(req.body);
    issuebook.save().then(issuebook=>{
        res.status(200).json({'issuebook':'Registration Successfull'});
    }).catch(err=>{
        res.status(400).send('Registration Failed');
    });
});
module.exports=IssueRoute;