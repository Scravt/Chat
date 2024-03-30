// En el archivo Chatbox.js
import React from 'react'
import styles from './Chatbox.module.css'

export const Chatbox = ({ data }) => {
  const dataChat = data["message"]
  return (
    <ul className={styles.container}>
      {dataChat?.map((message, index) => (
        <li key={index} className={styles.mensaje}>
          <div className={styles.user}>{message.sender + '  :'}</div>
          <div className={styles.message} >{message.message}</div>
        </li>
      ))}
    </ul>
  );
};
