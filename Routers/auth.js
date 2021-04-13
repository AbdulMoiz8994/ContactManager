const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get Logged in user");
});

router.post("/", (req, res) => {
  res.send("Login the user");
});

//we are exporting it as we do in react but syntax diff;
module.exports = router;
