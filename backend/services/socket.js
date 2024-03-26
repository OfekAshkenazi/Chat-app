import { Server } from "socket.io";
import http from 'http';
import express from 'express'
import Message from "../models/message.model.js";

const app = express()

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"]
    }
})

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId]
}

const userSocketMap = {}   // {userid === socketid}


io.on('connection', (socket) => {
    const userId = socket.handshake.query.userId

    if (userId != "undefined") userSocketMap[userId] = socket.id

    io.emit("showOnlineUsers", Object.keys(userSocketMap))

    socket.on("markMessagesAsSeen", async ({ otherUser, selfUser }) => {
        try {
            await Message.updateMany({ senderId: otherUser, receiverId: selfUser, seen: false }, { $set: { seen: true } })
            io.to(userSocketMap[otherUser]).emit("messagesSeen",{otherUser})

        } catch (error) {
            console.log(error)
        }
    })



    socket.on("disconnect", () => {
        delete userSocketMap[userId]
        io.emit("showOnlineUsers", Object.keys(userSocketMap))
    })
})

export { app, io, server }