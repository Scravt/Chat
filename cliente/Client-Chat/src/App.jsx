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
  const onChangePlayerName = (e) => {
    setUsername(e.target.value);
  }

  useEffect(() => {
    const _socket = io('http://localhost:3000');
    setSocket(_socket);

    _socket.on('chat message', (message) => {
      setData((prevData) => ({
        ...prevData,
        message: [...prevData.message, message]
      }));
    });


    _socket.on('users', (newUsers) => {
      setData((prevData) => ({
        ...prevData,
        usersList: newUsers
      }));
    });

    return () => {
      _socket.disconnect();
    };
  }, []);

  const loggin = () => {
    if (socket) {
      socket.emit('login', username, socket.id);
    }
  }

  const sendMessage = (message) => {
    if (socket && (message !== '')) {
      socket.emit('chat message', { sender: username, message: message });
    }
  };

  const onLoggin = () => {
    loggin();
    setIsLogged(true);
  }

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

