import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("database connected");

    }
    catch (err) {
        console.log(err)
    }
}
export default connectdb