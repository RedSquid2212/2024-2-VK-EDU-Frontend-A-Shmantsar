import { useState } from 'react';
import './App.css';
import AllChatsPage from './pages/AllChatsPage/AllChatsPage';
import ChatPage from './pages/ChatPage/ChatPage';

function App () {
  const [route, setRoute] = useState('home');
  const [chatInfo, setChatInfo] = useState({
    chatName: 'Дженнифер',
    info: 'был(а) 2 часа назад',
  });
  return (
    <>
      {
        route === 'home'
          ? <AllChatsPage setRoute={setRoute} setChatInfo={setChatInfo} />
          : <ChatPage
              chatName={chatInfo.chatName}
              info={chatInfo.info}
              setRoute={setRoute}
            />
      }
    </>
  );
}

export default App;
