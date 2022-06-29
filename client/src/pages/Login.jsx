import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link, Navigate } from 'react-router-dom'
import { useUser } from '../context/UserProvider'

export default function Login() {
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

    if(user && room) return <Navigate to='/'/>

    return (
        <Container style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
            <Stack className="justify-content-md-center w-50 mx-auto bg-light pe-4 ps-4 pb-4" style={{ alignSelf: 'auto' }}>
                <h1 className='h2 mb-3 mt-5'>Login</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            value={username}
                            onChange={(e) => setUsername(e.currentTarget.value)}
                            type='text'
                            placeholder="Enter your Username" />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Room</Form.Label>
                        <Form.Control
                            value={roomToJoin}
                            onChange={(e) => setRoomToJoin(e.currentTarget.value)}
                            type='text'
                            placeholder="Room to Join" />
                    </Form.Group>
                    <Button className="me-3" type='submit' variant='primary'>Enter Chat</Button>
                </Form>
            </Stack >
        </Container>
    )
}