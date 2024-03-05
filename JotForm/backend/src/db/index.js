import mongoose from "mongoose";
import DB_NAME from "../constants.js"

// DATABASE IN IN THE ANOTHER CONTINENT ----hITESH sIR

const connectDB = async () => {
    try {
        const connInst = await mongoose.connect(`${process.env.MONGO_URI}/${'RamaiahDB'}`)
    } catch (error) {
        console.log(error)
    }
}

export default connectDB