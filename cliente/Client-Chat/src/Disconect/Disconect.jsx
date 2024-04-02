import React from 'react'
import styles from './Disconect.module.css'
import { User } from '../user/User'

export const Disconect = ({ username }) => {
    return (
        <div className={styles.containerActive}>
            <div className={styles.containerMenssage}> este eres tu! </div>
            <div className={styles.containerUser} >
                <User username={username}  small={false}/>
                <span className={styles.user} >  {username}   </span>
            </div>

            <button className={styles.buttonDisconect}>
                Disconect
            </button>
        </div>
    )
}
