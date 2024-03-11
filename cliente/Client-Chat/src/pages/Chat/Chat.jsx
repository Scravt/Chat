import React from 'react'
import { Header } from '../../header/Header'
import styles from './Chat.module.css'
import { SiderData } from '../../sider/SiderData'
import { Room } from '../../Room/Room'

export const Chat = () => {
  return (
    <div className={styles.theChat}>
      <Header/>
      <div>
        <SiderData/>
        <Room/>
      </div>
    </div>
  )
}
