import { useState } from "react"
import toast from "react-hot-toast"


const useSignup = () => {
    const [loading, setLoading] = useState(false)

    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
        const success = handleCredentialsErrors({ fullName, username, password, confirmPassword, gender })
        if (!success) return
        setLoading(true)


        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
            });

            const data = await res.json()
            if (data.error) {
                throw new Error(data.error)
            }

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
        toast.error('Please fill the full Name field')
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