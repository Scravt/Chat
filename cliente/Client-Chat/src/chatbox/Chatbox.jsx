import React from 'react'
import styles from './Chatbox.module.css'

export const Chatbox = ({data}) => {
  return (
        <section className={styles.seccionChat} >
            <ul className={styles.container}>
            {data?.map((message, index) => (
                <li key={index} className={styles.mensaje}>
                    <div className={styles.user}> {message.sender + '  '}:</div>
                    <div> {message.message}  </div>
                
                </li>
            ))}
            </ul>
        </section>
  )
}
