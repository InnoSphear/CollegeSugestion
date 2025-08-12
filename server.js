import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from './config/db.js';
import collegeRoutes from "./routes/collegeRoutes.js";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();

const app = express();

app.use(cors())
app.use(express.json())
app.use("/api/colleges", collegeRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT

app.listen(PORT , ()=>{
    connectDb()
    console.log(`The server is running ${PORT}`)
})