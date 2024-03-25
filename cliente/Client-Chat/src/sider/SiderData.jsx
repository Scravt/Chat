import React from 'react'
import { User } from '../user/User'
import { ListRooms } from '../listRooms/ListRooms'
import  styles  from './SiderData.module.css'


export const SiderData = ({username}) => {
  return (
    <div className={styles.sider}>
        <User username = {username}/>
        <ListRooms />
    </div>
  )
}
