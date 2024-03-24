import express from "express"
import { sendMessage } from "./message.controller.js"


const router = express.Router()


router.post("/send/:id", sendMessage)


export default router