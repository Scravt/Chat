import React from 'react'
import styles from './Chatbox.module.css'

const chat = [
    {
      sender: 'usedasdasdasdasdasdr1',
      message: 'Hola'
    },
    {
      sender: 'user2',
      message: 'Hola ¿cómo estás?'
    },
    {
      sender: 'user1',
      message: 'Bien, ¿y tú?'
    },
    {
      sender: 'user2',
      message: 'Todo bien, gracias por preguntar.'
    },
  ];

  export const Chatbox = ({ data }) => {
    return (
        <ul className={styles.container}>
            {chat?.map((message, index) => (
                <li key={index} className={styles.mensaje}>
                    <div className={styles.user}>{message.sender + '  '}:</div>
                    <div className={styles.message} >{message.message}</div>
                </li>
            ))}
        </ul>
    );
};