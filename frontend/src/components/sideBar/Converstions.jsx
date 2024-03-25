import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Converstion from "./Converstion";

export default function Converstions() {
    const { loading, conversations } = useGetConversations()

    return (
        <section className="py-2 flex flex-col overflow-auto">

            {conversations.map((conversation, idx) => {
                return <Converstion key={conversation._id} conversation={conversation} emogi={getRandomEmoji()} lastIdx={idx === conversations.length - 1} />
            })}

            {loading ? <span className="loading loading-spinner mx-auto"></span> : null}

        </section>
    )
}