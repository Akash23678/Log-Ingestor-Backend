const mongoose = require("mongoose");

async function connectMongoDB(){
    mongoose
    .connect(process.env.MONGODB_URI, {
      dbName: process.env.DB_NAME,
    })
    .then(() => {
      console.log('Mongodb connected....');
    })
    .catch((err)=>{
        console.log("error in connecting Mongo: ", err);
    })
}
module.exports = connectMongoDB;
