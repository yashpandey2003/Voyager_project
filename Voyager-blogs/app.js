const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const mongoose = require("mongoose");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


mongoose.connect('mongodb://0.0.0.0:27017/voyagerblogDB', { useNewUrlParser: true, useUnifiedTopology: true });

const postSchema = {

  title: String,
  content: String,
  name: String,
  time: String

};

const Post = mongoose.model("Post", postSchema);
app.get("/", function (req, res) {
  


  Post.find({}, function (err, posts) {

    res.render("home", {

      
      posts: posts

    });

  })



});
app.get("/compose", function (req, res) {


  res.render("compose", {

  })
})

app.post("/compose", function (req, res) {

  let today = new Date();
  let options = {
      weekday: "long",
      day: "numeric",
      month: "long"
  };
  let day = today.toLocaleDateString("en-US", options);
  const post = new Post({

    title: req.body.postTitle,
    content: req.body.postBody,
    name: req.body.postName,
    time: day

  });
  post.save(function(err){

    if (!err){
    
    res.redirect("/");
    
    }
    
    });
    
    
})


app.get("/posts/:postId", function (req, res) {
  const requestedPostId = req.params.postId;
  Post.findOne({_id: requestedPostId}, function(err, post){

    res.render("post", {
    
    title: post.title,
    
    content: post.content,
    name: post.name,
    time: post.time
    
    });
    
    });

})

app.listen(3000, function () {
  console.log("Server started on port 3000");
});