import React from 'react'
import styles from './User.module.css'

export const User = ({username}) => {
  const user = username;
  return (
    <div className={styles.ContainerUser}>
      <span className={styles.User}>{user.split('')[0].toUpperCase()}</span>
    </div>
  )
}
