import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export const AuthContextProvider = ({ children }) => {
    const STOARGE_KEY = "credentials"
    const [loogedinUser, setLoogedinUser] = useState(JSON.parse(localStorage.getItem(STOARGE_KEY)) || null)

    return <AuthContext.Provider value={{ loogedinUser, setLoogedinUser }}>
        {children}

    </AuthContext.Provider>
}