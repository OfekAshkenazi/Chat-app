import { BsSend } from "react-icons/bs"
import { toast } from 'react-hot-toast';
import useSendMessage from "../../hooks/useSendMessage";
import { useState } from "react";


export default function MessageInput() {
    const [msg, setMsg] = useState('')
    const { loading, sendMessage } = useSendMessage()

    async function handleSubmit(e) {
        e.preventDefault()
        if (!msg) return toast.error("pls enter a message")

        try {
            await sendMessage(msg)
            setMsg('')

        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <form onSubmit={handleSubmit}
            className="px-4 my-3"
        >
            <div className="w-full relative">

                <input type="text"
                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
                    placeholder="Send a message"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                />

                <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
                    {loading ? <div className="loading loading-spinner"></div> : <BsSend className="text-white" />}
                </button>

            </div>

        </form>
    )
}