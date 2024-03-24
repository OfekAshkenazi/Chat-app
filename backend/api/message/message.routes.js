import express from "express"
import { sendMessage,getMessage } from "./message.controller.js"
import { requireAuth } from "../../middleware/requireAuth.middleware.js"


const router = express.Router()


router.get("/:id", requireAuth, getMessage)
router.post("/send/:id", requireAuth, sendMessage)


export default router