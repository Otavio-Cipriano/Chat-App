import { createContext, useContext, useEffect, useState } from "react"
import { useSocket } from "./SocketProvider"

const RoomContext = createContext()

export function useRoom() {
    return useContext(RoomContext)
}


export default function RoomProvider({ children }) {
    const [users, setUsers] = useState()
    const [room, setRoom] = useState()
    const { socket } = useSocket()


    useEffect(() => {


    }, [socket])

    const value = {
 
    }

    return (
        <RoomContext.Provider value={value}>
            {children}
        </RoomContext.Provider>
    )
}
