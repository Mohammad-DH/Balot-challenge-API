const express = require("express");

const { AdminAuthentication } = require("../controllers");

const router = express.Router();

router.post("/signup", AdminAuthentication.Signup);
router.post("/login", AdminAuthentication.Login);

module.exports = router;
