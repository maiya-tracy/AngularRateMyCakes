var express = require("express");

var path = require("path");
var session = require('express-session');

var app = express();
var bodyParser = require('body-parser');
const server = app.listen(1337);

app.use(express.static( __dirname + '/public/dist/public' ));

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 60000
  }
}))

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ratemycakes');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json({
  limit: '5mb'
}));

var CommentSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: [true, "Must provide a rating"],
    minlength: 5
  },
  comment: {
    type: String,
    required: [true, "Must provide a comment"],
    minlength: 2,
    default: ''
  }
}, {
  timestamps: true
})
mongoose.model('Comment', CommentSchema);
var Comment = mongoose.model('Comment');

var CakeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2
  },
  URL: {
    type: String,
    minlength: 2,
    required: true
  },
  rating: [CommentSchema],
}, {
  timestamps: true
})
mongoose.model('Cake', CakeSchema);
var Cake = mongoose.model('Cake');



app.get('/cakes', (req, res) => {
    Cake.find({}, (err, cakes) => {
        if(err){
           console.log("Returned error", err);
           res.json({message: "Error", error: err})
        }
        else {
           res.json({message: "Success", data: cakes})
        }
     })
})

app.get('/cakes/:id', (req,res) => {
  Cake.findById(req.params.id, (err, cakes) => {
      if(err){
         console.log("Returned error", err);
         res.json({message: "Error", error: err})
      }
      else {
         res.json({message: "Success", data: cakes})
      }
   })
})

app.post('/cakes', (req,res) => {
  Cake.create(req.body, (err, cakes) => {
    if(err){
       console.log("Returned error", err);
       res.json({message: "Error", error: err})
    }
    else {
       res.json({message: "Success", data: cakes})
    }
  })
})

app.get('/cakes/rating/:cakeid', (req,res) => {
  Comment.findById(req.params.cakeid, (err, comments) => {
      if(err){
         console.log("Returned error", err);
         res.json({message: "Error", error: err})
      }
      else {
         res.json({message: "Success", data: comments})
      }
   })
})

app.post('/cakes/rating', (req,res) => {
  Comment.create(req.body, (err, comments) => {
    if(err){
       console.log("Returned error", err);
       res.json({message: "Error", error: err})
    }
    else {
       res.json({message: "Success", data: comments})
    }
  })
})

app.delete('/cakes/:id', (req,res) => {
  Cake.findByIdAndRemove(req.params.id, (err) => {
    if(err){
       console.log("Returned error", err);
       res.json({message: "Error", error: err})
    }
    else {
       res.json({message: "Success"})
    }
  })
})
