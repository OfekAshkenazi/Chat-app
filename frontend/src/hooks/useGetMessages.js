import { useEffect, useState } from "react"
import { toast } from 'react-hot-toast';
import useConversation from './../store/useConversation';

const useGetMessages = () => {
    const [loading, setLoading] = useState(false)
    const { messages, setMessages, selectedConversation } = useConversation()

    useEffect(() => {
        if (selectedConversation?._id) getMessages()

    }, [selectedConversation?._id])

    async function getMessages() {
        setLoading(true)

        try {
            const res = await fetch(`/api/messages/${selectedConversation._id}`)
            const data = await res.json()

            if (data.error) {
                throw new Error(data.error)
            }

            setLoading(false)
            setMessages(data)

        } catch (error) {
            toast.error(error.message)

        } finally {
            setLoading(false)
        }
    }

    return { messages, loading }

}

export default useGetMessages