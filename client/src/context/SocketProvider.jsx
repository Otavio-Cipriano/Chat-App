import React, { createContext, useContext } from 'react'

import { io } from 'socket.io-client'


const SocketContext = createContext()

const socket = io('http://localhost:3001/', { transports : ['websocket'] })

export function useSocket() {
    return useContext(SocketContext)
}

export default function SocketProvider({children}) {

    const value = {socket}

    return (
        <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
    )
}
