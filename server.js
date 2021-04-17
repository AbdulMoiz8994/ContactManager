const express = require("express");
const dotenv = require("dotenv");
const ConnectMongo = require("./config/db");
dotenv.config({path: './config.env'})

const app = express();

ConnectMongo();

//initialize middle wire
app.use(express.json({extended: false}))

app.get("/", (req, res) => res.json({ msg: "Helo World" }));

app.use("/api/user", require("./Routers/user"));
app.use("/api/auth", require("./Routers/auth"));
app.use("/api/contact", require("./Routers/contact"));

// ⏬ This means is that we are on prod then it will run on envoirmental variable  otherswise in development mode it will run on develop
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`This  is Server Port number ${PORT}`));
