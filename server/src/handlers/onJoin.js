const onJoin = (socket) => {
    socket.on('join', (userAndRoom) => {
        if(userAndRoom.room){
            socket.join(userAndRoom.room)
            console.log(userAndRoom.room)
            socket.broadcast.to(userAndRoom.room).emit('joinned', {user: userAndRoom.user, id: socket.id})
        }
    })
}

module.exports = onJoin