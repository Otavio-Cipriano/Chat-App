const onLeave = (socket) => {
    socket.on('leave', (userAndRoom) => {
        if (userAndRoom.room && userAndRoom.user) {
            socket.leave(userAndRoom.room)
            // let lastMsg = `${userAndRoom.user} left ${userAndRoom.room}`
            console.log(`${userAndRoom.user} left ${userAndRoom.room}`)
            socket.broadcast.to(userAndRoom.room).emit('left', {user: userAndRoom.user, room: userAndRoom.room})
        }
    })
}

module.exports = onLeave