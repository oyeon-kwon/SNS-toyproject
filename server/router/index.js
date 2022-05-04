const express = require("express");
const router = express.Router();

const sign = require("./sign");
const post = require("./post");

router.use("/sign", sign);
router.use("/post", post);

module.exports = router;