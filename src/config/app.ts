import express from 'express'
import { Server } from 'http'
import io from 'socket.io'
import path from 'path'
import setupRoutes from './routes'


const app = express()//instance of express

app.use(express.static(path.join(__dirname, '../public')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../views'))
setupRoutes(app)

const httpServer = new Server(app)//http server

const ioserver = io(httpServer)//socket IO Server
ioserver.on('connection', socket => {
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId)
    socket.to(roomId).broadcast.emit('user-connected', userId)
    socket.on('disconnect', () => {
      socket.to(roomId).broadcast.emit('user-disconnected', userId)
    })
  })
})


export default httpServer