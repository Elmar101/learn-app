import io from "socket.io-client";

let socket = io();

export const init:() => void = ():void => {
    console.log("connecting the server");

    socket = io("http://localhost:3000",{
        transports: ['websocket']
    });

    socket.on("connect",()=>{
        console.log("connected!");
        
    })
}

export const sendMessage:(message: string)=> void = (message: string):void => {
    if(socket){
        socket.emit("new-message",message)
    }
}

export const subScribeMessage = (callback: (message: string)=> void):void => {
    if(!socket){return;}
    socket.on("receive-message",(message:string)=>{
        console.log("there is new message",message);
        callback(message);
    })
}

export const subScribeInitialMessage = (callback: (messages: {message: string; fromMe?: boolean | undefined; }[])=> void):void => {
    if(!socket){return;}
    socket.on("message-list",(messages: {message: string; fromMe?: boolean | undefined; }[])=>{
        console.log("message-list",messages);
        callback(messages);
    })
}