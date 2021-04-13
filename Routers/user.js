const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.send("Register a User");
});

//we are exporting it as we do in react but syntax diff;
module.exports = router;
