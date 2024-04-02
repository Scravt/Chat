import React, {useState} from 'react'
import { Header } from '../../header/Header'
import styles from './Chat.module.css'
import { SiderData } from '../../sider/SiderData'
import { Room } from '../../Room/Room'

export const Chat = ({data, username,sendMessage}) => {
  const [disconnect, setDisconnect] = useState(false);

  const disconnectU = () => {
    setDisconnect(disconnect? false : true);
  }
  return (
    <div className={styles.theChat}>
      <Header disconnectU={disconnectU} />
      <div className={styles.ChatAndUser}>
        <SiderData username={username}  data={data} />
        <Room data={data}  username={username} sendMessage={sendMessage} disconnect={disconnect}/>
      </div>
    </div>
  )
}
