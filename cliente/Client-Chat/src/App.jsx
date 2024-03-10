import { useState, useEffect } from 'react';
import './App.css';
import io from 'socket.io-client';

function App() {
  const [data, setData] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [socket, setSocket] = useState(null);

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

  const sendMessage = (event) => {
    event.preventDefault();

    if (socket && messageInput.trim() !== '') {
      // Enviar mensaje al servidor
      socket.emit('chat message', { sender: 'user', message: messageInput });
      setMessageInput('');
    }
  };

  return (
    <div className="App">
      <section>
        <h1>Chat</h1>
        <div>
          {data.map((message, index) => (
            <div key={index}>
              <strong>{message.sender}: </strong>
              {message.message}
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage}>
          <input
            type="text"
            placeholder="Escribe un mensaje"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
}

export default App;
