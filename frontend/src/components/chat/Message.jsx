import { useAuthContext } from "../../context/AuthContext"
import useConversation from "../../store/useConversation"
import { extractTime } from "../../utils/extractTime"

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
            </div>
            <div className='chat-footer text-xs text-gray-900 font-bold flex gap-1 items-center'>{extractTime(message.createdAt)}</div>


        </section>
    )
}