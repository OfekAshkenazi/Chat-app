import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Converstion from "./Converstion";

export default function Converstions() {
    const { loading, conversations } = useGetConversations()

    return (
        <section className="py-2 flex flex-col overflow-auto">

            {conversations.map((conversation) => {
                return <Converstion key={conversation._id} conversation={conversation} emogi={getRandomEmoji()} />
            })}

            {loading ? <span className="loading loading-spinner mx-auto"></span> : null}

        </section>
    )
}