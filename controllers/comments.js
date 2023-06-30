const Comment = require("../models/Comment");

module.exports = {
  createComment: async (req, res) => {
    try {
      await Comment.create({
        comment: req.body.comment,
        post: req.params.id,
        user: req.user.id,
        likes: 0,
      });
      console.log("Comment has been added!");
      res.redirect("/feed");
    } catch (err) {
      console.log(err);
    }
  }
};