import React from 'react'
import { Header } from '../../header/Header'
import styles from './Chat.module.css'
import { SiderData } from '../../sider/SiderData'
import { Room } from '../../Room/Room'

export const Chat = ({data, username,sendMessage}) => {
  return (
    <div className={styles.theChat}>
      <Header/>
      <div className={styles.ChatAndUser}>
        <SiderData username ={username}/>
        <Room data = {data}  username ={username} sendMessage={sendMessage} />
      </div>
    </div>
  )
}
