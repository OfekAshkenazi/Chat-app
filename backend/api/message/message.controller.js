import Conversation from './../../models/conversation.model.js';
import Message from './../../models/message.model.js';
import { getReceiverSocketId, io } from './../../services/socket.js';

export async function sendMessage(req, res) {
    try {
        const { id: receiverId } = req.params
        const senderId = req.user._id

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }

        const { message, image } = req.body

        if (message) {
            const newMessage = new Message({
                senderId,
                receiverId,
                message,
            })

            conversation.messages.push(newMessage._id)

            await Promise.all([conversation.save(), newMessage.save()])

            const receiverSocketId = getReceiverSocketId(receiverId)

            if (receiverSocketId) {
                io.to(receiverSocketId).emit("newMessage", newMessage)
            }

            return res.status(201).json(newMessage)
        }

        if (image) {
            const newMessage = new Message({
                senderId,
                receiverId,
                image,
            })

            conversation.messages.push(newMessage._id)

            await Promise.all([conversation.save(), newMessage.save()])

            const receiverSocketId = getReceiverSocketId(receiverId)

            if (receiverSocketId) {
                io.to(receiverSocketId).emit("newMessage", newMessage)
            }

            return res.status(201).json(newMessage)
        }

        return res.status(400).json({ error: "Message or image is required" })

    } catch (error) {
        console.log("Error in sendMessage controller", error.message)
        return res.status(500).json({ error: "Internal server Error" })
    }
}

export async function getMessage(req, res) {
    try {
        const { id: receiverId } = req.params
        const senderId = req.user._id

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }

        }).populate("messages")

        if (!conversation) return res.status(200).json([])

        res.status(200).json(conversation.messages)

    } catch (error) {
        console.log("Error in getMessage controller", error.message)
        res.status(500).json({ error: "Internal server Error" })
    }
}