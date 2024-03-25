import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext"
import useConverstion from './../store/useConverstion';


const useListenMessages = () => {
    const { socket } = useSocketContext()
    const { messages, setMessages } = useConverstion()

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            setMessages([...messages, newMessage])
        })
        console.log('triiger')

        return () => socket?.off("newMessage")
    }, [socket, setMessages, messages])

}

export default useListenMessages