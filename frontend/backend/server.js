const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const PORT=5550;
const cors=require('cors');
const mongoose=require('mongoose');
const config=require('./config/DB');
const bookRoutes = require('./Routes/BookRoute.js');
const LibraryRoute=require('./Routes/LibraryRoute.js');
const IssueRoute = require('./Routes/IssueBookRoute.js');
const SubmitRoute = require('./Routes/SubmitBookRoute.js');
const UserRoute = require('./Routes/StudentRoute.js');

mongoose.Promise=global.Promise;
mongoose.connect(config.DB,{useNewUrlParser:true}).then(()=>{
    console.log("Database Connected"+config.DB);
},
err=>{
    console.log("Unable to connect datbase"+err);
}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use("/books",UserRoute);
app.use("/book",bookRoutes);
app.use('/library',LibraryRoute);
app.use('/issuebook',IssueRoute);
app.use('/submitbook',SubmitRoute);

app.listen(PORT,()=>{
    console.log("Server is started at port"+PORT);
});
