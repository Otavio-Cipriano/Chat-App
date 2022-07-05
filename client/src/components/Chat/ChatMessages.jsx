import React, { useEffect, useRef } from 'react'

import { useUser } from '../../context/UserProvider'
import ChatMessage from './ChatMessage'

export default function ChatMessages({ messages }) {
    const { user, room } = useUser()

    const messagesRef = useRef(null)


    useEffect(()=>{
        messagesRef.current.scrollIntoView({inline: "end", behavior: "smooth"})
    },[messages])

    return (
        <div className="chat__messages h-100 .bg-light.bg-gradient shadow-sm">
            <div className='h-100' style={{overflow: 'hidden auto', maxHeight: '86vh'}} >
                {/* <p style={{padding: '1rem 1.5rem'}}>Welcome to {room}, {user}</p> */}
                <ChatMessage isGeneric={true} genericMsg={`Welcome to ${room}, ${user}`}/>
                {
                    messages.map((msg, idx) => {
                        return (
                            <ChatMessage msg={msg} key={idx} />
                        )
                    })
                }
                <div ref={messagesRef}></div>
            </div>
        </div>
    )
}
