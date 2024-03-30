import React from 'react'
import { Chatbox } from '../chatbox/Chatbox'
import { SecUserRoomList } from '../seccionUsersandsList/SecUserRoomList'
import styles from './Room.module.css'
import { BoxMessage } from '../BoxMessage/BoxMessage'

export const Room = ({data, username, sendMessage}) => {
  return (
    <div className={styles.Room}>
      <span className={styles.title}>Room name</span>
      <div className={styles.ContainerChatAndUsers}>
        <Chatbox data={data}/>
        <SecUserRoomList data={data} />
      </div>
      <BoxMessage  username ={username} sendMessage={sendMessage} />
    </div>
  )
}
