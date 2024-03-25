import { BiLogOut } from 'react-icons/bi'
import useLogout from '../../hooks/useLogout'

export default function LogoutBtn() {
    const {loading, logout} = useLogout()

    return (
        <section className="mt-auto">

            {!loading ? (
                <BiLogOut onClick={logout} className='w-6 h-6 text-white cursor-pointer' />

            ) : (
                <span className='loading loading-spinner'></span>
            )}
        </section>
    )
}