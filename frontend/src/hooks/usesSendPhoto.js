import { useState } from "react"
import useConversation from "../store/useConversation"
import toast from "react-hot-toast"

const useSendPhoto = () => {
    const [loading, setLoading] = useState(false)
    const { messages, setMessages, selectedConversation } = useConversation()

    const sendPhoto = async (image) => {
        setLoading(true)

        try {
            const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({image})
            })

            const data = await res.json()

            if(data.error) {
                throw new Error(data.error)
            }

            setMessages([...messages, data])

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return {loading, sendPhoto}


}

export default useSendPhoto