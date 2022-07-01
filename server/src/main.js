require('dotenv').config()
const server = require('./server')
const { Server } = require('socket.io')
const onJoin = require('./handlers/onJoin')
const onMessage = require('./handlers/onMessage')
const onLeave = require('./handlers/onLeave')

const PORT = process.env.PORT || 3001

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000/"
    }
})


const onConnection = (socket) => {
    console.log(`A User has connected ${socket.id}`)
    // console.log(socket.rooms.size)
    onJoin(socket)
    onMessage(socket)
    onLeave(socket)

    // socket.on('disconnect', () => {
    //     console.log('A user has disconnected')
    // })
}

io.on('connection', onConnection)



server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})