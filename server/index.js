import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config({})
const app = express()

app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))

const PORT = process.env.PORT || 5000


app.listen(()=>{
    console.log("server is running " + PORT)
})