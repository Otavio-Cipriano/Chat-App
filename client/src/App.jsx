import Container from 'react-bootstrap/Container'
import Routing from './pages/Routing'
import Chat from './components/Chat/Chat'
import UserProvider from './context/UserProvider'
import SocketProvider from './context/SocketProvider'


function App() {

  return (
    <>
      <SocketProvider>
        <UserProvider>
          <Routing />
        </UserProvider>
      </SocketProvider>
    </>
  )
}

export default App
