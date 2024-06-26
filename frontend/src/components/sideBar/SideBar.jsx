
import SearchInput from './SearchInput';
import Converstions from './Converstions';
import LogoutBtn from './LogoutBtn';

export default function SideBar() {
    return (
        <section className='border-r border-slate-500 p-4 flex flex-col'>

            <SearchInput />

            <div className="divider px-3"></div>

            <Converstions />
            <LogoutBtn />

        </section>
    )
}