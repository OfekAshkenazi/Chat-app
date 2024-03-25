import { useEffect, useState } from "react"
import { toast } from 'react-hot-toast';
import useConverstion from './../store/useConverstion';

const useGetMessages = () => {
    const [loading, setLoading] = useState(false)
    const { messages, setMessages, selectedConverstion } = useConverstion()

    useEffect(() => {
        if (selectedConverstion?._id) getMessages()

    }, [selectedConverstion?._id])

    async function getMessages() {
        setLoading(true)

        try {
            const res = await fetch(`/api/messages/${selectedConverstion._id}`)
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