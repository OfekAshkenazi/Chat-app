import express from "express"
import dotenv from "dotenv"
import authRoutes from "./api/auth/auth.routes.js"
import connect from "./services/db.service.js"

const app = express()
dotenv.config()


const PORT = process.env.PORT || 5000

app.use(express.json())

app.use("/api/auth",authRoutes)


app.listen(PORT, () => {
    connect()
    console.log(`server is running on port ${PORT}`)
})