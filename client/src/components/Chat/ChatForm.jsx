import React from 'react'
import { useUser } from '../../context/UserProvider';

import { Form, Button, Stack } from 'react-bootstrap'
import { useSocket } from '../../context/SocketProvider';

import { IoSend } from 'react-icons/io5'



export default function ChatForm({ currentMessage, setCurrentMessage, setMessages }) {
    const { user, room } = useUser()
    const { socket } = useSocket()

    const sendMessage = (e) => {
        e.preventDefault();
        let msg = {
            user: user,
            room: room,
            text: currentMessage
        }
        socket.emit('message', msg)
        setMessages(prevMessages => [...prevMessages, msg])
        setCurrentMessage('')
    }

    return (
        <div className="chat__form">
            <Form>
                <Stack direction='horizontal' gap={2}>
                    <Form.Control
                        className="me-auto"
                        placeholder="Send A Message"
                        value={currentMessage}
                        onChange={(e) => setCurrentMessage(e.target.value)} 
                        onKeyDown={(e) => {if(e.key === 'Enter') sendMessage(e)}}/>
                    <Button className="w-25" variant="primary" onClick={sendMessage}>
                        Chat
                        <IoSend style={{margin: '-3px 0 0 10px'}}/>
                    </Button>
                </Stack>
            </Form>
        </div>
    )
}
