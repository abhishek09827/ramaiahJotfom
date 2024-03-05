// https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj?origin=share --- Model Link
// require('dotenv').config({path: './env'})
import dotenv from "dotenv"

import connectDB from "./src/db/index.js";
import { app } from "./src/app.js";

dotenv.config()



connectDB()
.then(
() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Conneceted to and mongo & port  : ${process.env.PORT}`);
    })
}
)
.catch((err) => {
    console.log("Mongo Conn failed");
})






