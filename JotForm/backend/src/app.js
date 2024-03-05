import express from "express"
import cors from "cors"
import { deptRouter } from "./route/dept.route.js"
const app = express()

// app.use() used when middleware or config settings
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true,limit: "16kb"}))
app.use(express.static("public"))



//routes



//routes declaration
app.use("/api/v1/dept", deptRouter)


export { app }