import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import { useUser } from '../context/UserProvider'

export default function Routing() {
  const {user} = useUser()
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<ProtectedRoute user={user}><Dashboard/></ProtectedRoute>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  )
}


const ProtectedRoute = ({user, children}) => {
  if(!user){
    return <Navigate to="/login" replace/>
  }

  return children
}