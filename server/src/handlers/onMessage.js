const onMessage = (socket) => {
    socket.on('message', (msg) => {
        console.log(msg)
        socket.broadcast.to(msg.room).emit('chatting', msg)
    })
}

module.exports = onMessage