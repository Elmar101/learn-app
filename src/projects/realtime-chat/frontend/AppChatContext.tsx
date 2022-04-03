import React from 'react'
import ChatContainer from './components/ChatContainer';
import { ChatContextProvider } from './context/chatContext';

const AppChatContext = () => {
  return (
    <ChatContextProvider>
      <ChatContainer/>
    </ChatContextProvider>
  )
}

export default AppChatContext;