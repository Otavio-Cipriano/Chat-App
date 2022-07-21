import Container from 'react-bootstrap/Container'
import { Navigate } from 'react-router-dom'
import LobbyBox from '../components/LobbyBox/LobbyBox'
import { useUser } from '../context/UserProvider'

export default function Lobby() {
    const { user, room } = useUser()


    if(user && room) return <Navigate to='/'/>

    return (
        <Container className="lobby">
            <LobbyBox/>
        </Container>
    )
}
