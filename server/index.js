import express from 'express';
import logger from 'morgan';
import cors from 'cors';

import { createServer } from 'http';
import { Server } from 'socket.io';

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



io.on('connection', (socket) => {
  console.log('a user connected');

  // Manejo de desconexiones
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  // Manejo de mensajes del chat
  socket.on('chat message', (message) => {
    console.log('message:', message);

    // Broadcast del mensaje a todos los clientes conectados
    io.emit('chat message', message);
  });
});



httpServer.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
