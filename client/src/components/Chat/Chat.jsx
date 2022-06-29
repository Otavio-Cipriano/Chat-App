import Stack from 'react-bootstrap/Stack'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


import { useEffect, useRef, useState } from 'react'

import ChatMessage from './ChatMessage'
import { useUser } from '../../context/UserProvider'
import { useSocket } from '../../context/SocketProvider'
import ChatMessages from './ChatMessages'
import ChatForm from './ChatForm'

// const socket = io('http://localhost:3001/', { transports : ['websocket'] })


export default function Chat() {
    const [messages, setMessages] = useState([])
    const [currentMessage, setCurrentMessage] = useState('')
    const { user, room } = useUser()
    const { socket } = useSocket()


    useEffect(() => {

        const handler = (msg) => {
            setMessages(prevMessages => [...prevMessages, msg])
        }

        const handler2 = (vl) => {
            console.log(vl)
        }

        socket.on('chatting', handler)
        socket.on('joinned', handler2)

        return () => {
            socket.off('chatting', handler)
            socket.off('joinned', handler2)
        }

    }, [socket])

    return (
        <Stack className="chat pb-1 h-100">
            <ChatMessages messages={messages} />
            <ChatForm
                setMessages={setMessages}
                currentMessage={currentMessage}
                setCurrentMessage={setCurrentMessage} />
        </Stack>
    )
}
