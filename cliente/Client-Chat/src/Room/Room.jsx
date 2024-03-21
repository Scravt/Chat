import React from 'react'
import { Chatbox } from '../chatbox/Chatbox'
import { SecUserRoomList } from '../seccionUsersandsList/SecUserRoomList'
import styles from './Room.module.css'
import { BoxMessage } from '../BoxMessage/BoxMessage'

export const Room = () => {
  return (
    <div className={styles.Room}>
      <span className={styles.title}>Room name</span>
      <div className={styles.ContainerChatAndUsers}>
        <Chatbox />
        <SecUserRoomList />
      </div>
      <BoxMessage />
    </div>
  )
}
