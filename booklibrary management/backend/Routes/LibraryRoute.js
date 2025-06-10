const express=require('express');
const LibraryRoute=express.Router();
let Library= require('../Models/LibraryModel.js')

LibraryRoute.route("/registration").post((req,res)=>{
    let library=new Library(req.body);
    library.save().then(library=>{
        res.status(200).json({'library':'Registration Successfull'});
    }).catch(err=>{
        res.status(400).send('Registration Failed');
    });
});
LibraryRoute.route('/login/:uid/:upass/:fullname').get(function(req,res){
    Library.findOne({$and:[{uid:req.params.uid},{upass:req.params.upass},{fullname:req.params.fullname},{status:"Active"}]}).then(library=>{
        console.log(library);
        res.json(library)
    });
});
LibraryRoute.route('/showAll').get((req,res)=>{
    Library.find().then(library=>{
        res.json(library);
    }).catch(err=>{
        res.json(400).send("Data Not Found");
    });
});

//Block
LibraryRoute.route('/editlibrary/:uid/:status/').get(async(req,res)=>{
    const allbook=await Library.updateOne({uid:req.params.uid},{
        uid:req.params.uid,
        status:req.params.status
    });
    res.status(200).send({
        status:"Success",
        data:allbook
    })
})

module.exports=LibraryRoute;