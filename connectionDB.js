
const mongoose = require("mongoose")

const connectMongoDB = async () => {
    
    try{
        const URI = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PWD}@cluster0.p9mg7oq.mongodb.net/?retryWrites=true&w=majority`;
        
        const mongoConnection = await mongoose.connect(URI);
        //const mongoConnection = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
        
        //const mongoConnection = await mongoose.connect(`mongodb://${process.env.USER_NAME}:${process.env.USER_PWD}@localhost:27017/${process.env.DB_NAME}`);
        //const mongoConnection = await mongoose.connect(`mongodb://${process.env.USER_NAME}:${process.env.USER_PWD}@localhost:27017/${process.env.DB_NAME}`);

        console.log(`MongoDB Connected Successfully !!! DB Host:-> ${mongoConnection.connection.host} `)
    }catch(error){
        console.log("MongoDB CONNECTION Error : ", error);
        process.exit(1);  //throw error
    }
}

module.exports = connectMongoDB;
