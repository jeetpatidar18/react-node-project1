const mongoose=require('mongoose');
const Schema= mongoose.Schema;
let Book=new Schema({
    bcode:{
        type:Number
    },
    bname:{
        type:String
    },
    bprice:{
        type:Number
    }
},{
    collection:"books"
});
module.exports=mongoose.model("Book",Book);