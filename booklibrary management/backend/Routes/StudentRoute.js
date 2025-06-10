const express=require('express');
const UserRoute=express.Router();
let User=require('../Models/StudentModel.js')

UserRoute.route("/registration").post((req,res)=>{
    let user=new User(req.body);
    user.save().then(user=>{
        res.status(200).json({'user':'Registration Successfull'});
    }).catch(err=>{
        res.status(400).send('Registration Failed');
    });
});


//Login
UserRoute.route('/login/:uid/:upass').get(function(req,res){
    User.findOne({$and:[{uid:req.params.uid},{upass:req.params.upass},{status:"Active"}]}).then(user=>{
        console.log(user);
        res.json(user)
    });
});

//Show All
UserRoute.route('/showAll').get((req,res)=>{
    User.find().then(user=>{
        res.json(user);
    }).catch(err=>{
        res.json(400).send("Data Not Found");
    })
});

UserRoute.route('/editstudent/:uid/:status/').get(async(req,res)=>{
    const allbook=await User.updateOne({uid:req.params.uid},{
        uid:req.params.uid,
        status:req.params.status
    });
    res.status(200).send({
        status:"Success",
        data:allbook
    })
})
module.exports=UserRoute;