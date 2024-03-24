import SideBar from "./SideBar";

export default function Home() {
    return (
        <section
            className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400
                       bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0"
        >
            <SideBar />
            {/* <MessageContainer /> */}

        </section>
    )
}