import Converstions from "./Converstions";
import SearchInput from "./SearchInput";

export default function SideBar() {
    return (
        <section className='border-r border-slate-500 p-4 flex flex-col'>

            <SearchInput />

            <div className="divider px-3"></div>

            <Converstions />
            {/* <LogoutBtn /> */}

        </section>
    )
}