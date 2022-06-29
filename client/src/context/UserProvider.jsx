import { createContext, useContext, useEffect, useState } from "react"
import { useSocket } from "./SocketProvider"

const UserContext = createContext()

export function useUser() {
    return useContext(UserContext)
}


export default function UserProvider({ children }) {
    const [user, setUser] = useState()
    const [room, setRoom] = useState()
    const { socket } = useSocket()


    useEffect(() => {

        if (user && room) {
            socket.emit('join', {user, room})
        }

    }, [socket, user, room])

    const value = {
        user,
        room,
        setUser,
        setRoom
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
