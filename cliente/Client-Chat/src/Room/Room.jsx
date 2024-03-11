import React from 'react'
import { Chatbox } from '../chatbox/Chatbox'
import { secUserRoomList } from '../seccionUsersandsList/secUserRoomList'

export const Room = () => {
  return (
    <div >
        <div>Room name</div>
      <div>
        <Chatbox/>
        <secUserRoomList/>
      </div>
      <div>enviar mensaje </div>
    </div>
  )
}
