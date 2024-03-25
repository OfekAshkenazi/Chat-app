import { BiLogOut } from 'react-icons/bi'
import useLogout from '../../hooks/useLogout'

export default function LogoutBtn() {
    const {logout} = useLogout()

    return (
        <section className="mt-auto">
            <BiLogOut onClick={logout} className='w-6 h-6 text-white cursor-pointer' />
        </section>
    )
}