import { useState } from 'react';
import styles from './BoxMessage.module.css';

export const BoxMessage = () => {
    const[message, setMessage] = useState('');
 
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };
    const sendMessage = () => {
        console.log('Mensaje enviado:', message);
        setMessage('');
    };

    return (
        <div className={styles.message}>
            <span className={styles.messageTitle}>UserAleatorio :</span>
            <input
                type="text"
                placeholder="Type a message"
                value={message}
                className={styles.inputMessage}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};
