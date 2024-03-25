import useConverstion from "../../store/useConverstion"
import { useSocketContext } from "../../context/SocketContext"

export default function Converstion({ conversation, emogi, lastIdx }) {
    const { selectedConverstion, setSelectedConverstion } = useConverstion()

    const isSelected = selectedConverstion?._id === conversation._id

    const { onlineUsers } = useSocketContext()
    const isOnline = onlineUsers.includes(conversation._id)

    return (
        <section>
            <div
                className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-600" : ""} transition-all`}
                onClick={() => setSelectedConverstion(conversation)}>


                <div className={`avatar ${isOnline ? 'online' : 'offline'}`}>
                    <div className='w-12 rounded-full'>
                        <img
                            src={conversation.image}
                            alt='user avatar'
                        />
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                        <p className="font-bold text-gray-200">
                            {conversation.username}
                        </p>

                        <span className="text-xl">
                            {emogi}
                        </span>
                    </div>
                </div>

            </div>

            {!lastIdx && <div className='divider my-0 py-0 h-1' />}
        </section>
    )
}
