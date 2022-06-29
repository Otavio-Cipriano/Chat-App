const onLeave = (socket) => {
    socket.on('leave', (userAndRoom) => {
        if (userAndRoom.room && userAndRoom.user) {
            socket.leave(userAndRoom.room)
            let lastMsg = `${userAndRoom.user} left ${userAndRoom.room}`
            console.log(`${userAndRoom.user} left ${userAndRoom.room}`)
            socket.emit('left', lastMsg)
        }
    })
}

module.exports = onLeave