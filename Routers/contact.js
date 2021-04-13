const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get all contacts");
});

router.post("/", (req, res) => {
  res.send("Add a contact");
});

// @route PUT  api/contact/0

router.put("/:id", (req, res) => {
  res.status(500).send(req.body);
});
router.delete("/:id", (req, res) => {
  res.send("Delete The contact");
});

//we are exporting it as we do in react but syntax diff;
module.exports = router;
