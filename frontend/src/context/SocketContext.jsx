import { createContext, useEffect, useState, useContext } from 'react';

import { useAuthContext } from './AuthContext';
import io from "socket.io-client"

export const SocketContext = createContext()

export const useSocketContext = () => {
    return useContext(SocketContext)
}

export const SocketContextProvider = ({ children }) => {

    const [socket, setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const { loggedinUser } = useAuthContext()

    useEffect(() => {
        if (loggedinUser) {
            const socket = io("https://chat-app-fzxa.onrender.com", {
                query: {
                    userId: loggedinUser._id
                }
            })
            setSocket(socket)

            socket.on("showOnlineUsers", (users) => {
                setOnlineUsers(users)
            })


            return () => socket.close()
        } else {
            if (socket) {
                socket.close()
                setSocket(null)
            }
        }
    }, [loggedinUser])

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}> {children} </SocketContext.Provider>
    )
}

