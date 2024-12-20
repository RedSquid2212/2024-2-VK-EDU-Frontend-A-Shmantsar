import { useEffect, useState } from 'react';
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import MessageList from '../../components/MessageList/MessageList';
import NewMessageForm from '../../components/NewMessageForm/NewMessageForm';
import { getItemFromLocalStorage } from '../../utils/localStorage.service';
import { useParams } from 'react-router-dom';
import { chats } from '../../mocks/chats.mock';

export default function ChatPage() {
  const initialMessages = JSON.parse(getItemFromLocalStorage('messages')) ?? [
    { text: 'Я тут кое-что нарисовала. Посмотри, как будет время', time: '10:53', isNew: false, isReceived: true },
    { text: 'Тебе нравится, как я нарисовала?', time: '10:53', isNew: false, isReceived: true },
  ];
  const [messages, setMessages] = useState(initialMessages);

  const { id } = useParams();
  const chatInfo = chats.at(id);

  useEffect(() => {
    setMessages(prevState => prevState.map(item => ({
      ...item,
      isNew: false,
    })));
  }, [setMessages]);

  return (
    <>
      <ChatHeader chatName={chatInfo.name} info={chatInfo.info} />
      <MessageList messages={messages} />
      <NewMessageForm setMessages={setMessages} />
    </>
  );
}
