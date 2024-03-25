import useGetConversations from "../../hooks/useGetConversations";
import Converstion from "./Converstion";

export default function Converstions() {
    const { loading, conversations } = useGetConversations()
    console.log(conversations)

    return (
        <section className="py-2 flex flex-col overflow-auto">
            <Converstion />
            <Converstion />
            <Converstion />
            <Converstion />
            <Converstion />
            <Converstion />
            <Converstion />
            <Converstion />

        </section>
    )
}