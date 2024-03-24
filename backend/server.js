import express from "express"
import dotenv from "dotenv"
import cookieParser from 'cookie-parser'

import authRoutes from "./api/auth/auth.routes.js"
import messageRoutes from "./api/message/message.routes.js"

import connect from "./services/db.service.js"

const app = express()
dotenv.config()


const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)


app.listen(PORT, () => {
    connect()
    console.log(`server is running on port ${PORT}`)
})