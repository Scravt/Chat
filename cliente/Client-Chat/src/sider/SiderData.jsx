import React from 'react'
import { User } from '../user/User'
import  styles  from './SiderData.module.css'
import { SecUserRoomList } from '../seccionUsersandsList/SecUserRoomList'


export const SiderData = ({username, data}) => {
  return (
    <div className={styles.sider}>
        <User username = {username} small={true}/>
        <SecUserRoomList data = {data}/>      
    </div>
  )
}
