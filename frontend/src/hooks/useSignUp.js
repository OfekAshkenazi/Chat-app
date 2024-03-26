import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"


const useSignup = () => {
    const STOARGE_KEY = "credentials"
    const [loading, setLoading] = useState(false)
    const { setLoggedinUser } = useAuthContext()

    const signup = async ({ fullName, username, password, confirmPassword, gender, image }) => {
        const success = handleCredentialsErrors({ fullName, username, password, confirmPassword, gender })
        if (!success) return
        setLoading(true)


        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender, image}),
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

    return { loading, signup }
}
export default useSignup


function handleCredentialsErrors({ fullName, username, password, confirmPassword, gender }) {
    if (!fullName) {
        toast.error('Please fill the full name field')
        return false
    }
    if (!username) {
        toast.error('Please fill the user name field')
        return false
    }
    if (!password) {
        toast.error('Please fill the password field')
        return false
    }
    if (!confirmPassword) {
        toast.error('Please fill the confirm Password field')
        return false
    }
    if (!gender) {
        toast.error('Please fill the gender field')
        return false
    }
    if (password !== confirmPassword) {
        toast.error('Passwords do not match')
        return false
    }

    if (password.length < 4) {
        toast.error('Passwords need to be at least 4 ')
        return false
    }
    return true

}