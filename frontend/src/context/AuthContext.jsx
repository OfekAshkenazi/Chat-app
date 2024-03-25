import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export const AuthContextProvider = ({ children }) => {
    const STOARGE_KEY = "credentials"
    const [loggedinUser, setLoggedinUser] = useState(JSON.parse(localStorage.getItem(STOARGE_KEY)) || null)

    return <AuthContext.Provider value={{ loggedinUser, setLoggedinUser }}>
        {children}

    </AuthContext.Provider>
}