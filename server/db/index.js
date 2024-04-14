import mongoose from "mongoose";
import { DB_Name } from "../constrain.js";

const connectDB = async () => {
    try {
        const connectDBInstance = await mongoose.connect(`${process.env.MongoDb_URI}/${DB_Name}`)
        console.log(`Connected with MongoDb ${connectDBInstance.connection.host}`)
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}
export default connectDB;