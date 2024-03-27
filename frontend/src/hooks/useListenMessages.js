import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext"
import useConversation from './../store/useConversation';
import notificationSound from "../assets/sounds/notification.mp3"
import useSendNotification from './useSendNotification';


const useListenMessages = () => {
    const { socket } = useSocketContext()
    const { messages, setMessages } = useConversation()
    const { sendNotification } = useSendNotification()

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true
            const sound = new Audio(notificationSound)
            sound.play()
            setMessages([...messages, newMessage])
            sendNotification('You got new message')

        })

        return () => socket?.off("newMessage")
    }, [socket, setMessages, messages])

}

export default useListenMessages