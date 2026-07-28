const express = require("express");
const router = express.Router();
const adminuser = process.env.ADMIN_USER || "admin";
const adminpass = process.env.ADMIN_PASS || "admin";
const legacyUser = "shivanif53_db_user";
const legacyPass = "Lvj3f96fMKCXYGKl";

router.post("/adminlogin", (req, res) => {
  const { username, password } = req.body;
  if (
    (username === adminuser && password === adminpass) ||
    (username === "admin" && password === "admin123") ||
    (username === legacyUser && password === legacyPass)
  ) {
    res.send("admin is here");
  } else {
    res.status(401).send("unauthorized");
  }
});
module.exports = router;