import React, { useState } from 'react'
import styles from './SecUserRoomList.module.css'
import { GoTriangleRight } from "react-icons/go";
import { GoTriangleDown } from "react-icons/go";

export const SecUserRoomList = ({ data }) => {
  const [showUsersList, setShowUsersList] = useState(false)
  const { usersList } = data;
  const CantidadUsuarios = usersList?.length;
  return (
    <div className={styles.ContainerUsersList}>
      <div className={styles.title} onClick={() => { setShowUsersList(showUsersList ? false : true) }} >
        {showUsersList ? <GoTriangleDown /> : <GoTriangleRight />}
        {CantidadUsuarios}  {CantidadUsuarios<2?"usuario": "usuarios"}  en linea
      </div>
      {showUsersList &&
        <ul className={styles.UsersList}>
          {usersList?.map(user => {
            return <li key={user["id"]} className={styles.user} >{user["username"]}</li>
          })}
        </ul>
      }

    </div>
  )
}
