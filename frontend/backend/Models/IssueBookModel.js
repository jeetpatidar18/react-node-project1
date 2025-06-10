const mongoose=require('mongoose')
const Schema=mongoose.Schema;
let IssueBook=new Schema(
    {
    bid:{type:String},
    studid:{type:String},
    studname:{type:String},
    studclassname:{type:String},
    bookstatus:{type:String},
    mylist:{type:String}
},
{
    collection:'bookcollection'
});

module.exports=mongoose.model('IssueBook',IssueBook);