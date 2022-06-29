import React from 'react'

import { useUser } from '../../context/UserProvider'
import ChatMessage from './ChatMessage'

export default function ChatMessages({ messages }) {
    const { user, room } = useUser()

    return (
        <div className="chat__messages h-100 .bg-light.bg-gradient shadow-sm">
            <div className='h-100'>
                <p>Welcome to {room}, {user}</p>
                {
                    messages.map((msg, idx) => {
                        return (
                            <ChatMessage msg={msg} key={idx} />
                        )
                    })
                }
            </div>
        </div>
    )
}
