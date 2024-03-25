import MessageInput from "./MessageInput";
import Messages from "./Messages";
import MessageContainerNotActive from './MessageContainerNotActive'
import useConverstion from "../../store/useConverstion";
import { useEffect } from "react";

export default function MessageContainer() {

    const { selectedConverstion, setSelectedConverstion } = useConverstion()

    useEffect(() => {
        return () => {
            setSelectedConverstion(null)
        }
    }, [setSelectedConverstion])

    return (
        <section className="md:min-w-[450px] flex flex-col">

            {selectedConverstion ?
                <>
                    <header>
                        <div className="bg-slate-500 px-4 py-2 mb-2">
                            <span className="label-text">To: </span>
                            <span className="text-gray-900 font-bold text-transform: capitalize">{selectedConverstion.fullName}</span>
                        </div>
                    </header>

                    <Messages />
                    <MessageInput />
                </>
                : <MessageContainerNotActive />}

        </section>
    )
}