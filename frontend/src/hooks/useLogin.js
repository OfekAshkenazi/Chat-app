import { useState } from "react"
import { toast } from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext'

const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const { setLoggedinUser } = useAuthContext()
    const STOARGE_KEY = "credentials"


    const login = async (username, password) => {
        const success = handleCredentialsErrors({ username, password })
        if (!success) return

        setLoading(true)

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            })

            const data = await res.json()

            if (data.error) {
                throw new Error(data.error)
            }

            localStorage.setItem(STOARGE_KEY, JSON.stringify(data))
            setLoggedinUser(data)

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)

        }
    }

    return { loading, login }

}

export default useLogin

function handleCredentialsErrors({ username, password }) {
   
    if (!username) {
        toast.error('Please fill the user name field')
        return false
    }
    if (!password) {
        toast.error('Please fill the password field')
        return false
    }
    if (password.length < 4) {
        toast.error('Passwords need to be at least 4 ')
        return false
    }
    return true
}