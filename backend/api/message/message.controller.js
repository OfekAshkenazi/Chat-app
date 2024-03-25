import Conversation from './../../models/conversation.model.js';
import Message from './../../models/message.model.js';

export async function sendMessage(req, res) {
    try {
        const { message } = req.body
        const { id: receiverId } = req.params
        const senderId = req.user._id

        // this will find a converstion where the participants array need to be inculde with all the array i provied { $all: [senderId, receiverId] }
        let converstion = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })

        if (!converstion) {
            converstion = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

        if (newMessage) {
            converstion.messages.push(newMessage._id)
        }

        await Promise.all([converstion.save(), newMessage.save()])

        res.status(201).json(newMessage)

    } catch (error) {
        console.log("Error in sendMessage controller", error.message)
        res.status(500).json({ error: "Internal server Error" })
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