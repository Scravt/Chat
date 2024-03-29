import { useState, useEffect } from 'react';
import './App.css';
import io from 'socket.io-client';
import { Loggin } from './loggin/Loggin';
import { Chat } from './pages/Chat/Chat';


function App() {
  const [data, setData] = useState([]);
  const [messageInput, setMessageInput] = useState('lorenzo');
  const [socket, setSocket] = useState(null);
  const [username, setUsername] = useState('defaultUser');
  const [isLogged, setIsLogged] = useState(false);


  const onChangePlayerName = (e) => {
    setUsername(e.target.value);
  }

  const onLoggin = () => {
    setIsLogged(true);
  }

  useEffect(() => {
    const _socket = io('http://localhost:3000');

    _socket.on('chat message', (message) => {
      setData((prevData) => [...prevData, message]);
    });

    setSocket(_socket);

    return () => {
      _socket.disconnect();
    };
  }, []);

  const sendMessage = (message) => {

    if (socket && messageInput.trim() !== '') {
      // Enviar mensaje al servidor
      socket.emit('chat message', { sender: username, message: message});
      console.log('message:', message);
   
    }
  };

  if (!isLogged) {
    return <Loggin onChangePlayerName={onChangePlayerName} onLoggin={onLoggin} />
  }

  return (
    <div className="App">
        <Chat data = {data} username={username} sendMessage={sendMessage}/>
    </div>
  );
}

export default App;
