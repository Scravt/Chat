import React from 'react'
import { User } from '../user/User'
import { ListRooms } from '../listRooms/ListRooms'
import  styles  from './SiderData.module.css'


export const SiderData = () => {
  return (
    <div className={styles.sider}>
        <User/>
        <ListRooms />
    </div>
  )
}
