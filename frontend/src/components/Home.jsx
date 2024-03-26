import MessageContainer from './chat/MessageContainer';
import SideBar from './sideBar/SideBar';

export default function Home() {
    return (
        <section
            className='flex h-[640px] sm:h-[550px] md:h-[550px] rounded-lg overflow-hidden
         bg-gray-400 bg-clip-padding backdrop-filter
          backdrop-blur-lg bg-opacity-0 relative
          w-[375px] sm:min-w-[640px] md:min-w-[695px]
          '>
            <SideBar />
            <MessageContainer />

        </section>
    )
}