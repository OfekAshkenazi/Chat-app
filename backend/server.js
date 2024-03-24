const express = require("express")

const app = express()

app.get("/", (req,res) => {
    res.send("ofek the king you made it here")
})

app.listen(5000, () => console.log("server is running on port 5000"))