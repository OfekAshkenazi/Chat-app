import MessageInput from "./MessageInput";
import Messages from "./Messages";

export default function MessageContainer() {
    return (
        <section className="md:min-w-[450px] flex flex-col">

            <header>
                <div className="bg-slate-500 px-4 py-2 mb-2">
                    <span className="text-gray-900 font-bold">ofekasss</span>
                </div>
            </header>

            <Messages />

            <MessageInput />

        </section>
    )
}