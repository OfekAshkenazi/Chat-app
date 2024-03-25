import { TiMessages } from "react-icons/ti"
import { useAuthContext } from "../../context/AuthContext"

export default function MessageContainerNotActive() {
    const { loggedinUser } = useAuthContext()
    return (
        <section className="flex items-center justify-center w-full h-full">

            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>Welcome {loggedinUser.fullName}</p>
                <p>Select a chat to start converstions</p>

                <TiMessages className="text-3xl md:text-6xl text-center" />

            </div>

        </section>
    )
}