import Stack from 'react-bootstrap/Stack'
import { useUser } from '../../context/UserProvider'


export default function ChatMessage({msg, isGeneric, genericMsg}) {
  const {user} = useUser()

  if(isGeneric) return (
    <p style={{padding: '1rem 1.5rem'}}>{genericMsg}</p>
  )

  return (
    <Stack className={`w-50 m-3 ${msg.user == user ? '' : 'float-end'}`}>
        <p className={`ps-3 pe-3 p-2 m-1 shadow-sm rounded ${msg.user == user ? 'bg-light' : 'bg-info'}`}>{msg.text}</p>
        <span className='text-end pe-3'>{msg.user}</span>
    </Stack>
  )
}
