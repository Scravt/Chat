import React from 'react'
import styles from './Header.module.css'
import { PiChatsCircleThin } from "react-icons/pi";
import { OptionsUser } from '../optionsUser/OptionsUser';

export const Header = ({disconnectU}) => {
  return (
    <nav className={styles.naver}>
      <div className={styles.logo}>
        <PiChatsCircleThin className={styles.icon} />
       <h5>Chat</h5> 
      </div>
      <OptionsUser disconnectU={disconnectU} />
    </nav>
    )
}
