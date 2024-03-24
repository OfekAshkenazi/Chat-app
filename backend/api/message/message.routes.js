import express from "express"
import { sendMessage } from "./message.controller.js"
import { requireAuth } from "../../middleware/requireAuth.middleware.js"


const router = express.Router()


router.post("/send/:id", requireAuth, sendMessage)


export default router