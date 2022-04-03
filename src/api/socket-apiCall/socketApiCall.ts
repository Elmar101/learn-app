import io from "socket.io-client";

let socket = io();

export const init = () => {
    console.log("close the server");

    socket = io("http://localhost:3001",{
        transports: ['websocket']
    });

    socket.on("connect",()=>{
        console.log("close the server successly");
        
    })
}

export const send = (color: string) => {
    socket.emit("newColor", color);
}

export const subscribe = (callback: (color: string)=> void ) => {
    socket.on("receive",(color: string)=>{
        console.log("COLOR IS : ", color);
        callback(color);
    })
}