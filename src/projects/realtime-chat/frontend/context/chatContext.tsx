import { useState, createContext } from "react";

interface IChatContext {
    messages: Array<any>;
    setMessages: (messages: Array<any>) => void
}
const chatContext: React.Context<IChatContext | undefined> = createContext<IChatContext | undefined>(undefined);

//chatContextProvider 
export const ChatContextProvider: React.FC<{ children?: React.ReactNode }> = (props) => {
    const { children } = props;
    const [messages, setMessages] = useState<any[]>([])
    return (
        <chatContext.Provider value={{ messages, setMessages }}>
            {children}
        </chatContext.Provider>
    )
}