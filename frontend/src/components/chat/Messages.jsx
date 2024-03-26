import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../store/useConversation";

export default function Messages() {
    const { messages, loading } = useGetMessages()
    const lastMessageRef = useRef()

    useListenMessages()

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth" })
        }, 50)
    }, [messages])

    return (
        <section className='px-4 flex-1 overflow-auto'>

            {loading ? <MessageSkeleton /> : messages.map((message) => {
                return (
                    <div key={message._id} ref={lastMessageRef}>
                        <Message message={message} />
                    </div>
                )
            })}

            {!loading && messages.length === 0 && (
                <p className="text-center text-gray-300">Send a message to start the conversation</p>
            )}

        </section>
    )
}