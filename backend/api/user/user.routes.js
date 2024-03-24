import express from "express"
import { requireAuth } from "../../middleware/requireAuth.middleware.js"
import { getUsersForRendering } from "./user.contoller.js"

const router = express.Router()

router.get("/", requireAuth, getUsersForRendering)


export default router