import express from "express"
import dotenv from "dotenv"

const app = express()
dotenv.config()


const PORT = process.env.PORT || 5000

app.get("/", (req,res) => {
    res.send("ofek the king you made it here")
})

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))