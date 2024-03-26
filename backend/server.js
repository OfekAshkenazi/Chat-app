import express from "express"
import path from "path"
import dotenv from "dotenv"
import cookieParser from 'cookie-parser'

import authRoutes from "./api/auth/auth.routes.js"
import messageRoutes from "./api/message/message.routes.js"
import userRoutes from "./api/user/user.routes.js"

import connect from "./services/db.service.js"
import { app, server } from "./services/socket.js"

dotenv.config()

const PORT = process.env.PORT || 5000

const __dirname = path.resolve();

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})


server.listen(PORT, () => {
    connect()
    console.log(`server is running on port ${PORT}`)
})








// server until first deploy
// import express from "express"
// import dotenv from "dotenv"
// import cookieParser from 'cookie-parser'

// import authRoutes from "./api/auth/auth.routes.js"
// import messageRoutes from "./api/message/message.routes.js"
// import userRoutes from "./api/user/user.routes.js"

// import connect from "./services/db.service.js"
// import { app, server } from "./services/socket.js"

// dotenv.config()

// const PORT = process.env.PORT || 5000


// app.use(express.json())
// app.use(cookieParser())

// app.use("/api/auth",authRoutes)
// app.use("/api/messages",messageRoutes)
// app.use("/api/users",userRoutes)


// server.listen(PORT, () => {
//     connect()
//     console.log(`server is running on port ${PORT}`)
// })
