import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useUser } from '../../context/UserProvider'
import { useState } from "react";


export default function LobbyBox() {
    const { setUser, user, room, setRoom } = useUser()
    const [username, setUsername] = useState('')
    const [roomToJoin, setRoomToJoin] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser(username)
        setRoom(roomToJoin)
        setUsername('')
        setRoomToJoin('')
    }

    return (
        <Stack 
            className="lobby__box rounded-3 text-center justify-content-md-center w-50 mx-auto pe-4 ps-4 pb-4 bg-gray-900 text-white" style={{ alignSelf: 'auto' }}>
            <h1 className='h2 mb-3 mt-5'>Lobby</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3 text-start'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        value={username}
                        onChange={(e) => setUsername(e.currentTarget.value)}
                        type='text'
                        placeholder="Enter your Username"
                        className="placeholder-white bg-secondary border-secondary text-white" />
                </Form.Group>
                <Form.Group className='mb-3 text-start'>
                    <Form.Label>Room</Form.Label>
                    <Form.Control
                        value={roomToJoin}
                        onChange={(e) => setRoomToJoin(e.currentTarget.value)}
                        type='text'
                        placeholder="Room to Join"
                        className="placeholder-white bg-secondary border-secondary text-white" />
                </Form.Group>
                <Button className="mt-4 pt-2 pb-2 ps-4 pe-4" type='submit' variant='primary'>Enter Chat</Button>
            </Form>
        </Stack >
    )
}
