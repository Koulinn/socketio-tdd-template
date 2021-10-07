const example = (payload) => {
    console.log(payload, 'From Example')

    socket.emit("fromExample")
    socket.broadcast.emit("fromExample")
}

const socketHandlers = {
    example:example
}

export default socketHandlers