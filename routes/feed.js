const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const feedController = require("../controllers/feed");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Feed Routes - simplified for now
router.get("/", ensureAuth, feedController.getFeed);

router.post("/createPost", upload.single("file"), feedController.createPost);

router.put("/likePost/:id", feedController.likePost);

router.delete("/deletePost/:id", feedController.deletePost);

module.exports = router;