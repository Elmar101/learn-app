import ScrollableFeed from 'react-scrollable-feed'
import { useChatContext } from '../context/chatContext';
import ChatItem from './ChatItem';
import ChatItems from './ChatItem';
import styleScss from "./style.module.scss";
const ChatList = () => {
  const { messages, setMessages } = useChatContext();
  return (
    <div className={styleScss.chatlist}>
      <ScrollableFeed forceScroll={true}>
        {
          messages.map((item, index) => <ChatItem item={item} key={index} />)
        }
      </ScrollableFeed>
    </div>
  )
}

export default ChatList