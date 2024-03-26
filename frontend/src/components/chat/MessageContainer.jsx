import { useEffect, useState } from "react";

import useConversation from "../../store/useConversation";

import MessageInput from "./MessageInput";
import Messages from "./Messages";
import MessageContainerNotActive from './MessageContainerNotActive';

import { FaArrowLeftLong } from "react-icons/fa6";

export default function MessageContainer() {
    const { selectedConversation, setSelectedConversation } = useConversation()
    const [windowSize, setWindowSize] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth <= 640)
        }

        window.addEventListener("resize", handleResize)

        handleResize()

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <section className={`${windowSize ? 'absolute top-0 right-0 z-10 bg-slate-600 w-full h-full overflow-y-auto' : 'sm:flex flex-col'} ${selectedConversation ? '' : 'hidden'}`}>
            {!selectedConversation && <MessageContainerNotActive />}
            {selectedConversation && (
                <>
                    <header className={`bg-slate-500 px-4 py-2 mb-2 ${windowSize ? 'sticky top-0 left-0 w-full z-20' : ''}`}>
                        <div className="flex items-center justify-between gap-1">
                            <div>
                                <span className="label-text">To: </span>
                                <span className="text-gray-900 font-bold text-transform: capitalize">{selectedConversation.fullName}</span>
                            </div>
                            <FaArrowLeftLong className="h-5 w-5 cursor-pointer" onClick={() => setSelectedConversation(null)} title="Exit" />
                        </div>
                    </header>
                    <div className={`${windowSize ? 'mt-2' : ''} flex-1 overflow-y-auto`}>
                        <Messages />
                    </div>
                    <MessageInput />
                </>
            )}
        </section>
    )
}

