import React from 'react'
import { Col, Container, Row, Stack } from 'react-bootstrap'
import { useUser } from '../context/UserProvider'

import Chat from '../components/Chat/Chat'
import Topbar from '../components/Topbar/Topbar'

export default function Dashboard() {
    const { user } = useUser()
    return (
        <Container style={{height: '100vh'}}>
            <Stack className="w-100 h-100">
                <Topbar/>
                <Chat/>
            </Stack>
        </Container>
    )
}
