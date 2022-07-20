const onJoin = (socket) => {
    socket.on('join-room', (userAndRoom) => {
        if(userAndRoom.room){
            socket.join(userAndRoom.room)
            console.log(userAndRoom.room)
            socket.broadcast.to(userAndRoom.room).emit('joinned', {user: userAndRoom.user, id: socket.id})
        }

        socket.on('disconnect', () => {
           socket.broadcast.to(userAndRoom.room).emit('left', {id: socket.id, user: userAndRoom.user, room: userAndRoom.room})
        })
    })
}

module.exports = onJoin