import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../../skeletons/MessageSkeleton";
import Message from "./Message";

export default function Messages() {
    const { messages, loading } = useGetMessages()

    return (
        <section className="px-4 flex-1 overflow-auto">

            {loading ? <MessageSkeleton /> : messages.map((message) => {
                return <Message key={message._id} message={message} />
            })}

            {!loading && messages.length === 0 && (
                <p className="text-center text-gray-300">Send a message to start the conversation</p>
            )}

        </section>
    )
}