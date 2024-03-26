import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from './../../store/useConversation';
import useGetConversations from './../../hooks/useGetConversations';
import toast from "react-hot-toast";

export default function SearchInput() {
    const [search, setSerach] = useState("")
    const { setSelectedConversation } = useConversation()
    const { conversations } = useGetConversations()

    function handleSubmit(e) {
        e.preventDefault()
        if (!search) return
        if (search.length < 3) {
            return toast.error("Need to be at least 3 letters.")
        }
        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))

        if (conversation) {
            setSelectedConversation(conversation)
            setSerach('')
        } else toast.error("No conversation was found")

    }

    return (
        <form className="flex item-center gap-2" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search..."
                className="input input-bordered rounded-full"
                value={search}
                onChange={(e) => setSerach(e.target.value)}
            />

            <button type="submit" className="btn btn-circle bg-sky-500 text-white hover:bg-sky-700 ">
                <IoSearchSharp className="w-6 h-6 outline-none" />
            </button>

        </form>
    )
} 