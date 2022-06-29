const onJoin = (socket) => {
    socket.on('join', (userAndRoom) => {
        if(userAndRoom.room){
            socket.join(userAndRoom.room)
            console.log(userAndRoom.room)
            socket.broadcast.to(userAndRoom.room).emit('joinned', 'entro')
        }
    })
}

module.exports = onJoin