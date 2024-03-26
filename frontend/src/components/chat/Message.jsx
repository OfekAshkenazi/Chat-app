import { useAuthContext } from "../../context/AuthContext"
import useConversation from "../../store/useConversation"
import { extractTime } from "../../utils/extractTime"
import { BsCheck2All } from 'react-icons/bs'

export default function Message({ message }) {

    const { loggedinUser } = useAuthContext()
    const { selectedConversation } = useConversation()

    const fromMe = message.senderId === loggedinUser._id
    const chatClassName = fromMe ? 'chat-end' : 'chat-start'
    const profileImage = fromMe ? loggedinUser.image : selectedConversation?.image
    const bubbleBgColor = fromMe ? 'bg-blue-500' : ''
    const shakeClass = message.shouldShake ? "shake" : ""

    return (
        <section className={`chat ${chatClassName}`}>

            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src={profileImage} alt="avater" />
                </div>
            </div>

            <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>
                {message.message}
                {message.image && <img src={message.image} style={{ width: '150px' }} alt="image msg" /> }
            </div>
            <div className={`'chat-footer font-bold flex ${chatClassName === "chat-start" && "flex-row-reverse"} gap-1 items-center mt-1'`}>
                <span className="text-xs text-gray-900">{extractTime(message.createdAt)}</span>
                <BsCheck2All className={`' h-8 w-8' ${message.seen ? " text-blue-700" : "text-white"}`} />
            </div>

        </section>
    )
}