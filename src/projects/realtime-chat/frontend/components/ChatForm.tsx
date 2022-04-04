import React, { useEffect } from 'react'
import stylesScss from "./style.module.scss";
import {sendMessage} from "../../../../api/socket-apiCall/socketApiChat";
import { useChatContext } from '../context/chatContext';
const ChatForm = () => {
    const [message , setMessage] = React.useState("");
    const {messages , setMessages} = useChatContext();
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const form = e.target as typeof e.target & {
            message: { value: string };
        };
        //console.log(form.message.value)
        sendMessage(form.message.value);
        setMessages([...messages, {message}]);
        console.log("messages form", messages)
        setMessage("");
    }

    return (
        <div>
            <form onSubmit={(e:React.SyntheticEvent )=> handleSubmit(e)}>
                <input 
                    name="message"
                    className={stylesScss.textInput} 
                    value={message} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>)=> handleChange(e)} 
                />
            </form>
        </div>

    )
}

export default ChatForm;