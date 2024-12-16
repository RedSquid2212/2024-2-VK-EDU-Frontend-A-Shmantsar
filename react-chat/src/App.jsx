import './App.css';
import AllChatsPage from './pages/AllChatsPage/AllChatsPage';
import ChatPage from './pages/ChatPage/ChatPage';
import { HashRouter, Route, Routes } from 'react-router-dom';
import EditProfilePage from './pages/EditProfilePage/EditProfilePage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<AllChatsPage />} />
        <Route path='/chat/:id' element={<ChatPage />} />
        <Route path='/profile/edit' element={<EditProfilePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
