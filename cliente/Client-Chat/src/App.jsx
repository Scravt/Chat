// En el archivo App.js
import { useState, useEffect } from 'react';
import './App.css';
import io from 'socket.io-client';
import { Loggin } from './loggin/Loggin';
import { Chat } from './pages/Chat/Chat';

function App() {
  const [socket, setSocket] = useState(null);
  const [username, setUsername] = useState('defaultUser');
  const [isLogged, setIsLogged] = useState(false);
  const [room, setRoom] = useState('general');
  const [data, setData] = useState({ usersList: [], message: [{ sender: "admin", message: `Bienvenido!` }] });

  //setear nombre usuario
  const onChangePlayerName = (e) => {
    setUsername(e.target.value);
  }

  //conectar socket, actualzar data
  useEffect(() => {
    //coneccioon socket
    const _socket = io('http://localhost:3000');
    setSocket(_socket);

    //escuchar mensajes
    _socket.on('chat message', (message, room) => {
      setData((prevData) => ({
        ...prevData,
        message: [...prevData.message, message]
      }));
    });

    //escuchar usuarios
    _socket.on('users', (newUsers) => {
      setData((prevData) => ({
        ...prevData,
        usersList: newUsers
      }));
    });

    //escuchar salas
    _socket.on('socketRooms', (rooms) => {
      console.log('rooms:', rooms);
    });

    //limpiar socket
    return () => {
      _socket.disconnect();
    };
  }, []);

  //evento loggin
  const loggin = () => {
    if (socket) {
      socket.emit('login', username, socket.id);
    }
  }

  //unirse a sala
  const joinRoom = (room) => {
    if (socket) {
      socket.emit('joinRoom', room);
    }
  };

  //consultar salas
  const getRooms = () =>{
    if(socket){
      socket.emit('rooms');
    }
  }

  //salir de sala
  const leaveRoom = (room) => {
    if (socket) {
      socket.emit('leaveRoom', room);
    }
  };

  //enviar mensaje
  const sendMessage = (message, room) => {
    if (socket && (message !== '')) {
      socket.emit('chat message', { sender: username, message: message }, 'general');
      getRooms();
    }
  };

  //funcion para loggin setea,desencadena eventoo loggin  y une a room general
  const onLoggin = () => {
    if (username === 'defaultUser') {
      alert('El nombre de usuario no puede estar vacio');
      return;
    }
    loggin();
    joinRoom('general');
    setIsLogged(true);
  }

  //renderizado condicional de loggin
  if (!isLogged) {
    return <Loggin onChangePlayerName={onChangePlayerName} onLoggin={onLoggin} loggin={loggin} />
  }

  return (
    <div className="App">
      <Chat data={data} username={username} sendMessage={sendMessage} />
    </div>
  );
}

export default App;

