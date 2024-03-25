import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const useGetConversations = () => {
    const [loading, setLoading] = useState(false)
    const [conversations, setConverstions] = useState([])

    useEffect(() => {
        getConversations()
    }, [])

    async function getConversations() {
        setLoading(true)
        try {
            const res = await fetch("/api/users")
            const data = await res.json()
            if (data.error) {
                throw new Error(data.error)
            }
            setConverstions(data)


        } catch (error) {
            toast.error(error.message)

        } finally {
            setLoading(false)
        }
    }

    return {loading, conversations}


}

export default useGetConversations