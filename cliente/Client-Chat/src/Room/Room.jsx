import React from 'react'
import { Chatbox } from '../chatbox/Chatbox'
import { SecUserRoomList } from '../seccionUsersandsList/SecUserRoomList'
import styles from './Room.module.css'

export const Room = () => {
  return (
    <div className={styles.Room}>
      <span>Room name</span>
      <div className={styles.ContainerChatAndUsers}>
        <Chatbox />
        <SecUserRoomList />
      </div>
      <div className={styles.manssage}>
        enviar mensaje
      </div>
    </div>
  )
}
