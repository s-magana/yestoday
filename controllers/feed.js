const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const User = require("../models/User");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id }).populate('user', 'userName').sort({ createdAt: "desc" }).lean();
      const comments = await Comment.find().populate('user', 'userName').sort({ createdAt: "asc" }).lean();
      res.render("profile.ejs", { posts: posts, user: req.user, comments: comments });
    } catch (err) {
      console.log(err);
    }
  },
  newPost: async (req, res) => {
    try {
      res.render("newPost.ejs");
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const posts = await Post.find().populate('user', 'userName').sort({ createdAt: "desc" }).lean();
      const comments = await Comment.find().populate('user', 'userName').sort({ createdAt: "asc" }).lean();
      res.render("feed.ejs", { posts: posts, user: req.user, comments: comments });
    } catch (err) {
      console.log(err);
    }
  },
  createPost: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Post.create({
        image: result.secure_url,
        cloudinaryId: result.public_id,
        caption: req.body.caption,
        likes: 0,
        user: req.user.id,
      });
      console.log("Post has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  likePost: async (req, res) => {
    try {
      await Post.findOneAndUpdate(
        {_id: req.params.id},
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/feed`);
    } catch (err) {
      console.log(err);
    }
  },
  deletePost: async (req, res) => {
    try {
      // Find post by id
      let post = await Post.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId);
      // Delete post from db
      await Post.findOneAndDelete({_id: req.params.id});
      console.log("Deleted Post");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
};