import MessageInput from "./MessageInput";
import Messages from "./Messages";
import MessageContainerNotActive from './MessageContainerNotActive'
import useConversation from "../../store/useConversation";
import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";


export default function MessageContainer() {

    const { selectedConversation, setSelectedConversation } = useConversation()
    const [windowSize, setWindowSize] = useState(false)

    console.log(window.innerWidth)
    useEffect(() => {
        // addEventListener("resize", (e) => {
        //     if (window.innerWidth <= 640 && !windowSize) {
        //         setWindowSize(true)
        //         console.log('trigger')
        //     } 
        //     if(window.innerWidth >= 640 && windowSize !== false) {
        //         console.log('trigger')
        //         setWindowSize(false)

        //     }
        // })
        return () => {
            // setSelectedConversation(null)
            // removeEventListener("resize", {})

        }
    }, [setSelectedConversation,windowSize])

    return (
        <section className={`hidden sm:flex flex-col`}>
            {/* <section className={`hidden sm:flex flex-col`}> */}

            {selectedConversation ?
                <>
                    <header>
                        <div className="flex items-center justify-between gap-1 bg-slate-500 px-4 py-2 mb-2">
                            <div>
                                <span className="label-text">To: </span>
                                <span className="text-gray-900 font-bold text-transform: capitalize">{selectedConversation.fullName}</span>
                            </div>

                            <FaArrowLeftLong className="h-5 w-5 cursor-pointer" onClick={() => setSelectedConversation(null)} title="Exit" />


                        </div>
                    </header>

                    <Messages />
                    <MessageInput />
                </>
                : <MessageContainerNotActive />}

        </section>
    )
}