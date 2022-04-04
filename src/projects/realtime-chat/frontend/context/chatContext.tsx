import { useState, createContext, useContext } from "react";

interface IChatContext {
    messages: Array<{message: string, fromMe?: boolean}>;
    setMessages: (messages: {message: string,fromMe?: boolean}[]) => void
}

const chatContext: React.Context<IChatContext | undefined> = createContext<IChatContext | undefined>(undefined);

//chatContextProvider 
export const ChatContextProvider: React.FC<{ children?: React.ReactNode }> = (props) => {
    const { children } = props;
    const [messages, setMessages] = useState<{message: string}[]>( [] )

    return (
        <chatContext.Provider value={{ messages, setMessages }}>
            {children}
        </chatContext.Provider>
    )
}

export const useChatContext: () => IChatContext = () :IChatContext => {
    const state = useContext(chatContext);
    if(!state){throw new Error("Bir seyler ters gedir chatContext deyilen bir sey yoxdur")}
    return state;
}