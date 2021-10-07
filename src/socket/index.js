import { Server } from 'socket.io'
import {server} from '../server/index.js'
import { createServer } from 'http';
import UserModel from '../DB/Schema/User.js'
import socketHandlers from './socket-handlers.js';

export const httpServer = createServer(server)
const io = new Server(httpServer, { allowEIO3: true })

io.on('connection', socket => {
    socket.on("example", socketHandlers.example)


    socket.on("disconnect", () => {
        socket.broadcast.emit("UpdateTotalUsers")
    })

})