import { createContext, useContext, useEffect, useState } from "react"
import { useSocket } from "./SocketProvider"

const UserContext = createContext()

export function useUser() {
    return useContext(UserContext)
}


export default function UserProvider({ children }) {
    const [user, setUser] = useState('')
    const [room, setRoom] = useState('')
    const [whoLeft, setWhoLeft] = useState()
    const { socket } = useSocket()


    const leaveRoom = () => {
        setUser('')
        setRoom('')
        socket.emit('leave', {user: user, room: room})
    }


    useEffect(() => {

        if (user && room) {
            socket.emit('join', {user, room})
        }

        const handler = (user) =>{
            setWhoLeft(user)
        }

        socket.on('left', handler)

        return () => {
            socket.off('left', handler)
        }

    }, [socket, user, room])

    const value = {
        user,
        room,
        whoLeft,
        setUser,
        setRoom,
        leaveRoom
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
