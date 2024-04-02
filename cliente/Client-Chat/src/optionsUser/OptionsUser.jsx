import React from 'react'
import styles from './OptionsUser.module.css'

export const OptionsUser = ({disconnectU}) => {
  return (
    <div className={styles.opsUser} onClick={()=>disconnectU()}>
        Options
    </div>
  )
}
