import React from 'react'
import styles from './SecUserRoomList.module.css'
//aqui solo debe la lsita de todos los usuarios en la sala
export const SecUserRoomList = ({data}) => {
  const {usersList} = data;
  
  return (
    <div className={styles.ContainerUsersList}>
       <h1 className={styles.title}>Users</h1> 
      <ul className={styles.UsersList}>
        {usersList?.map(user => {
          return <li key={user["id"]} className={styles.user} >{user["username"]}</li>
        })}
      </ul>
    </div>
  )
}
