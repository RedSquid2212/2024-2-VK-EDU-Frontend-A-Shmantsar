import { useEffect, useState } from 'react';
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import MessageList from '../../components/MessageList/MessageList';
import NewMessageForm from '../../components/NewMessageForm/NewMessageForm';
import { getItemFromLocalStorage } from '../../utils/localStorage.service';

export default function ChatPage ({ chatName, info, setRoute }) {
  const initialMessages = JSON.parse(getItemFromLocalStorage('messages')) ?? [
    { text: 'Я тут кое-что нарисовала. Посмотри, как будет время', time: '10:53', isNew: false, isReceived: true },
    { text: 'Тебе нравится, как я нарисовала?', time: '10:53', isNew: false, isReceived: true },
  ];
  const [messages, setMessages] = useState(initialMessages);

  useEffect(() => {
    setMessages(prevState => prevState.map(item => ({
      ...item,
      isNew: false,
    })));
  }, [setMessages]);

  return (
    <>
      <ChatHeader setRoute={setRoute} chatName={chatName} info={info} />
      <MessageList messages={messages} />
      <NewMessageForm setMessages={setMessages} />
    </>
  );
}
