import React from 'react'
import { useParams } from 'react-router-dom'
function Chat() {
    const {id}=useParams()
  return (
    <div>
        
        <h1></h1>Chat id is {id}</div>
  )
}

export default Chat