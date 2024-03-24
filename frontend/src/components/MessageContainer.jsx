import { useState } from "react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import  MessageContainerNotActive  from './MessageContainerNotActive'

export default function MessageContainer() {

    const [chatSelected, setChatSelected] = useState(false)


    return (
        <section className="md:min-w-[450px] flex flex-col">

            {chatSelected ?
                <>
                    <header>
                        <div className="bg-slate-500 px-4 py-2 mb-2">
                            <span className="text-gray-900 font-bold">ofekasss</span>
                        </div>
                    </header>

                    <Messages />
                    <MessageInput />
                </>
                : <MessageContainerNotActive />}

        </section>
    )
}