import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useUser } from '../../context/UserProvider'
import { useState } from "react";
import FormError from "../FormError/FormError";


export default function LobbyBox() {
    const { setUser, user, room, setRoom } = useUser()
    const [username, setUsername] = useState('')
    const [roomName, setRoomName] = useState('')
    const [formError, setFormError] = useState({ username: '', room: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) return;
        setUser(username)
        setRoom(roomName)
    }

    const validateForm = () => {
        if ((!username && !roomName) || (username.length < 3 && roomName.length < 3)) {
            setFormError({
                username: "It\'s need to enter a username",
                room: "It\'s need to enter a room name"
            })
            setUsername('')
            setRoomName('')
            return true;
        }
        else if (!username || username.length < 3) {
            setFormError({
                username: "It\'s need to enter a username longer than 4 characters",
                room: ""
            })
            setUsername('')
            return true;
        }
        else if (!roomName || roomName.length < 3) {
            setFormError({
                username: "",
                room: "It\'s need to enter a room name longer than 4 characters"
            })
            setRoomName('')
            return true;
        }

        console.log('aa')
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
                        className={`placeholder-white bg-secondary border-secondary text-white ${formError['username'].length > 0 ? 'border-danger' : ''}`} />
                    {formError['username'].length > 0 ?
                        <Form.Text className="text-danger">{formError['username']}</Form.Text> :
                        ''}
                </Form.Group>
                <Form.Group className='mb-3 text-start'>
                    <Form.Label>Room</Form.Label>
                    <Form.Control
                        value={roomName}
                        onChange={(e) => setRoomName(e.currentTarget.value)}
                        type='text'
                        placeholder="Room to Join"
                        className={`placeholder-white bg-secondary border-secondary text-white ${formError['room'].length > 0 ? 'border-danger' : ''}`} />
                    {formError['room'].length > 0 ? 
                    <Form.Text className="text-danger">{formError['room']}</Form.Text> : 
                    ''}

                </Form.Group>
                <Button className="mt-4 pt-2 pb-2 ps-4 pe-4" type='submit' variant='primary'>Enter Chat</Button>
            </Form>
        </Stack >
    )
}