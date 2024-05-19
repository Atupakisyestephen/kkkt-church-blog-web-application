//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// mongoose.connect("mongodb+srv://admin-atu:Test123@cluster0.f4fxpmi.mongodb.net/kkktblogDB");
mongoose.connect("mongodb://localhost:27017/kkktblogDB");

const postSchema = {
  title: String,
  content: String
};

const Post = mongoose.model("Post", postSchema);

app.get("/", function(req, res){
  Post.find({})
    .then(posts => {
      res.render("home", {
        posts: posts
      });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
});

app.get("/compose", function(req, res){
  res.render("compose");
});

app.post("/compose", function (req, res) {
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody,
  });

  post
  .save()
  .then(() => {
    res.redirect("/");
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send("Internal Server Error");
  });
});

app.get("/posts/:postId", function(req, res){
  const requestedPostId = req.params.postId;

  Post.findOne({_id: requestedPostId})
    .then(post => {
      res.render("post", {
        title: post.title,
        content: post.content
      });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
});

// let port = process.env.PORT;
// if (port === null || port == "") {
//   port = 3000;
// }

// app.listen(port, function() {
//   console.log("Server has started successfully.");
// });

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function(){
    console.log("Server has started successfully.");
});
