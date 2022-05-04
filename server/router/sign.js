const express = require("express");
const router = express.Router(); 
const sign = require("../controllers/sign");

router.post("/signin", sign.signin);
router.post("/login", sign.login);
router.delete("/logout", sign.logout);

module.exports = router;
