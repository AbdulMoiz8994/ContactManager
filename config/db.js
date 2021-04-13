const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongoDB");

const ConnectMongo = async () => {
  try {
    mongoose.connect(db, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("We have connected to MongoDB");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = ConnectMongo;
