import { useState } from "react"
import { toast } from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext'

const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const { setLoggedinUser } = useAuthContext()
    const STOARGE_KEY = "credentials"


    const login = async (username, password) => {
        setLoading(true)

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            })

            const data = res.json()

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