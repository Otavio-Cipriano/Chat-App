import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Lobby from './Lobby'
import { useUser } from '../context/UserProvider'

export default function Routing() {
  const {user} = useUser()
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<ProtectedRoute user={user}><Dashboard/></ProtectedRoute>}/>
            <Route path='/lobby' element={<Lobby/>}/>
        </Routes>
    </BrowserRouter>
  )
}


const ProtectedRoute = ({user, children}) => {
  if(!user){
    return <Navigate to="/lobby" replace/>
  }

  return children
}