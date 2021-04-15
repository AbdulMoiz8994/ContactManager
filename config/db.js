const mongoose = require("mongoose");
// const config = require("config");
// const db = config.get("mongoDB");

//we are using single file env also for mongoDbURL via dotenv dependancy 
const dotEnv=require('dotenv');
dotEnv.config({path: './config.env'})
const db = process.env.mongoDB;

const ConnectMongo = async () => {
  try {
    await mongoose.connect(db, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("We have connected to MongoDB");
  } catch (error) {
    console.error(error.message); //when the catch run then show specific reason of via .message error in console
    process.exit(1); //This mean is that  stop re-runing again and again
  }
};

module.exports = ConnectMongo;
