import React from 'react'
import ChatForm from './ChatForm'
import ChatList from './ChatList'

const ChatContainer = () => {
  return (
    <div>
        <ChatList/>
        
        <hr/>

        <ChatForm/>
    </div>
  )
}

export default ChatContainer
