import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';

//creaccion de servidor
const port = process.env.PORT ?? 3000;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

// Configuración específica de CORS para las rutas de Express
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  })
);
app.use(logger('dev'));


//variables
let users = [];
const messageslist = [];
const data = [];



// eventos del socket
io.on('connection', (socket) => {

  //login de usuario
  socket.on('login', (username, id) => {
    console.log('login:', username);
    users.push({ username, id });
    io.emit('users', users);
    console.log(users);
  });

  //uniones a rooms
  socket.on('joinRoom', (room) => {
    console.log('joinRoom:', room);
    socket.join(room);
  });

  //salida de rooms
  socket.on('leaveRoom', (room) => {
    console.log('leaveRoom:', room);
    socket.leave(room);
  });

  //consulta de rooms aderidos
  socket.on('rooms', () => {
    console.log('rooms:', socket.rooms);
  });

   // Manejo de desconexionesS
   socket.on('disconnect', () => {
    users = users.filter((user) => user.id !== socket.id);
    console.log('user disconnected');
    io.emit('users', users);
   
  });

  // Manejo de mensajes del chat
  socket.on('chat message', (message) => {
    messageslist.push(message);
    console.log('message:', message);

  // Broadcast del mensaje a todos los clientes conectados
  io.emit('chat message', message);
  
  });
});


// Iniciar el servidor
httpServer.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
