import mongoose from "mongoose";
import {configDotenv} from "dotenv";

configDotenv()

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MongoDB")
    } catch (err) {
        console.log(err)
    }
}

export default connectDB


//mongodb+srv://sabir_rahimov:180521@cluster0.mse9jvw.mongodb.net/