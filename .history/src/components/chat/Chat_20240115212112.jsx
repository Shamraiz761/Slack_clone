import React from 'react'
import { useParams } from 'react-router-dom'
function Chat() {
    const {id}=useParams()
  return (
    <div className='ml-'>
        
        <h1>Chat id is {id}
        </h1>
        </div>
  )
}

export default Chat