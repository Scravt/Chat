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
    _socket.on('chat message', (message) => {
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
  //enviar mensaje
  const sendMessage = (message) => {
    if (socket && (message !== '')) {
      socket.emit('chat message', { sender: username, message: message });
    }
  };
  //funcion para loggin setea y desencadena eventoo 
  const onLoggin = () => {
    if (username === 'defaultUser') {
      alert('El nombre de usuario no puede estar vacio');
      return;
    }
    loggin();
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

