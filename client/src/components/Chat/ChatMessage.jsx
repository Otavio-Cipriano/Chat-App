import Stack from 'react-bootstrap/Stack'
import { useUser } from '../../context/UserProvider'


export default function ChatMessage({msg}) {
  const {user} = useUser()

  console.log(msg.user !== user)

  return (
    <Stack className={'w-50 m-3'}>
        <p className={'ps-3 pe-3 p-2 m-1 shadow-sm rounded' + msg.user == user ? 'bg-light' : 'bg-dark'}>{msg.text}</p>
        <span className='text-end pe-3'>{msg.user}</span>
    </Stack>
  )
}
