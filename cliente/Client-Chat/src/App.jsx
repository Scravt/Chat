import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]); // Cambié el estado inicial a un array vacío

  useEffect(() => {
    fetch('http://localhost:3000/chatData')
      .then(response => response.json())
      .then(data => {
        setData(data.chat); 
        console.log(data.chat); 
      })
      .catch(error => console.error('Error al obtener datos desde el servidor:', error));
  }, []);

  return (
    <div className="App">
      <section>
        <h1>Chat</h1>
        <div>
         {data.map(message => (
        <div key={message.id}>
          <strong>{message.sender}: </strong>
          {message.message}
        </div>
      ))}
      </div>
      <form>
        <input type="text" placeholder="Escribe un mensaje" />
        <button>Enviar</button>
      </form>
        
      </section>
    
     
    </div>
  );
}

export default App;

