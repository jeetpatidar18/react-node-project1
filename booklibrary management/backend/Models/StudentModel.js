const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let User=new Schema(
    {
    uid:{type:String},
    upass:{type:String},
    fullname:{type:String},
    classname:{type:String},
    gender:{type:String},
    city:{type:String},
    studrollno:{type:String},
    regdate:{type:String},
    status:{type:String},
},
{
    collection:'studentcollection'
});

module.exports=mongoose.model('User',User);