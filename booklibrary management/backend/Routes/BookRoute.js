const express = require('express');
const bookRoutes = express.Router();
let Book = require('../Models/BookModel');

bookRoutes.route('/save').post(function (req, res) {
    let book = new Book(req.body);
    book.save().then(book => {
        res.status(200).json({ 'book': 'New Book added Successfully' + book });
    })
        .catch(err => {
            res.status(400).send("Unable to save book details");
        });
});

bookRoutes.route('/search/:id').get(function (req, res) {
    Book.findOne({ "bcode": req.params.id }).then(book => {
        res.json(book);
    }).catch(err => {
        res.status(400).send("Data Not Found");
    });
});
bookRoutes.route('/editbook/:bcode/:bname/:bprice').get(async (req, res) => {
    const allbook = await Book.updateOne({
        bcode: req.params.bcode
    },
        {
            bcode: req.params.bcode,
            bname: req.params.bname,
            bprice: req.params.bprice
        }
    );
    res.status(200).send({
        status: 'Success',
        data: allbook,
    })
});

bookRoutes.route('/deletebook/:bcode').get(async (req, res) => {
    const mybook = await Book.deleteOne({
        bcode: req.params.bcode
    });
    res.status(200).send({
        status: 'Success',
        data: mybook,
    })
});
//get all recods
bookRoutes.route('/showAll').get(function (req, res) {  
    Book.find().then(book=>{
      res.json(book);
    }) .catch(err => {
      res.status(400).send("Data Not Found");
      });      
  });
  
module.exports = bookRoutes;

