const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
  title: { type: string, required: true, unique: true },
  author: { type: string, required: true },
  content: { type: string, required: true },
  category: { type: string, required: true },
  Name: { type: string, required: true },
  date: { type: Date, required: true },
});
const Posts = mongoose.model("Posts", postsSchema);
//This is the comment in post.js file
module.export = Posts;
//another comment
