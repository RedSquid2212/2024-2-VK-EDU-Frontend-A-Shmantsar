import './App.css';
import AllChatsPage from './pages/AllChatsPage/AllChatsPage';
import ChatPage from './pages/ChatPage/ChatPage';
import { HashRouter, Route, Routes } from 'react-router-dom';
import EditProfilePage from './pages/EditProfilePage/EditProfilePage';

function App() {
  const chatInfo = {
    chatName: 'Дженнифер',
    info: 'был(а) 2 часа назад',
  };
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<AllChatsPage />} />
        <Route path='/chat/:id' element={<ChatPage
          chatName={chatInfo.chatName}
          info={chatInfo.info}
        />} />
        <Route path='/profile/edit' element={<EditProfilePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
