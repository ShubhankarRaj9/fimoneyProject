const mongoose = require("mongoose");
require("dotenv").config();
exports.connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Mongo connects successfully");
    }
    catch(err){
        console.error("Mongo cn fails",err.message);
        process.exit(1);
    }
};