import React, { useEffect } from 'react'
import ChatForm from './ChatForm'
import ChatList from './ChatList'
import {init,subScribeMessage,subScribeInitialMessage} from "../../../../api/socket-apiCall/socketApiChat";
import { useChatContext } from '../context/chatContext';
const ChatContainer = () => {
  const {messages , setMessages} = useChatContext();
  console.log("FORM TEREFFF",messages)
  useEffect(()=>{
    console.log("Useffect FORM TEREFFF",messages)
    init();
    subScribeInitialMessage((messages: {message: string; fromMe?: boolean | undefined; }[]) => {
      setMessages(messages)
      console.log("subScribeChat messages container", messages)
    });
    subScribeMessage((message: string) => {
      setMessages([...messages, {message, fromMe: true}])
      console.log("subScribeChat messages container", messages)
    });
  },[])
  return (
    <div style={{width: "60%" , margin: "0 auto"}}>
        <ChatList/>
        <ChatForm/>
    </div>
  )
}

export default ChatContainer
