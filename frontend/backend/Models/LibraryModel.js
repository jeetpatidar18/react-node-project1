const mongoose=require('mongoose')
const Schema=mongoose.Schema;
let Library=new Schema(
    {
    uid:{type:String},
    upass:{type:String},
    fullname:{type:String},
    classname:{type:String},
    gender:{type:String},
    city:{type:String},
    collegecode:{type:String},
    regdate:{type:String},
    status:{type:String},

},
{
    collection:'librarycollection'
});

module.exports=mongoose.model('Library',Library);