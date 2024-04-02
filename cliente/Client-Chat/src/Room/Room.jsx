import React from 'react'
import { Chatbox } from '../chatbox/Chatbox'
import { SecUserRoomList } from '../seccionUsersandsList/SecUserRoomList'
import styles from './Room.module.css'
import { BoxMessage } from '../BoxMessage/BoxMessage'
import { Disconect } from '../Disconect/Disconect'

export const Room = ({data, username, sendMessage,disconnect}) => {
  return (
    <div className={styles.Room}>
      <span className={styles.title}> #ChatGeneral</span>
      <div className={styles.ContainerChatAndUsers}>
        <Chatbox data={data}/>
        {
          disconnect && <Disconect username={username}/>
        }
       
      </div>
      <BoxMessage  username ={username} sendMessage={sendMessage} />
    </div>
  )
}
