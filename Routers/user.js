const express = require("express");
const router = express.Router();
//we are importing check validation/autentication which express provide us
const { check, validationResult } = require("express-validator");
// import bcrypt
const bcrypt = require("bcryptjs");
// import json web token
const jwt = require("jsonwebtoken");
//import env
const dotEnv = require("dotenv");
dotEnv.config({ path: "../config.env" });

const User = require("../Model/User");




// @route Post api/user
// Register a user
// This is piblic avalible
router.post(
  "/",
  [
    check("name", "please enter the name").not().notEmpty(),
    check("email", "Please enter the valid email").isEmail(),
    check("password", "Please enter password at least 6 character").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email: email });

      if (user) {
        return res
          .status(400)
          .json({ msg: "This User Already exists MongoDB" });
      }

      user = new User({
        name,
        email,
        password,
      });
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.jwtSecret,
        {
          expiresIn: 3600000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);



//we are exporting it as we do in react but syntax diff;
module.exports = router;
