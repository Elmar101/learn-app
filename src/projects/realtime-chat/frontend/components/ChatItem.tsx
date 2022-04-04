import React from 'react'
import stylesScss from "./style.module.scss";
interface IProps {
  item: {
    message: string,
    fromMe?: boolean
  }
}
const ChatItem: React.FC<IProps> = ({item}) => {
  const {message} = item;
  return (
    <div className={`${stylesScss.chatItem} ${item.fromMe ? stylesScss.right: ""}`}>
        {message}
    </div>
  )
}

export default ChatItem;