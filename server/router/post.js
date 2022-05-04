const express = require("express");
const router = express.Router(); 
const post = require("../controllers/post");

router.post("/create-post", post.createPost);
router.get("/get-post", post.getPost);
router.delete("/delete-post", post.deletePost);

module.exports = router;
