import './App.css';
import AllChatsPage from './pages/AllChatsPage/AllChatsPage';
import ChatPage from './pages/ChatPage/ChatPage';
import { HashRouter, Route, Routes } from 'react-router-dom';
import EditProfilePage from './pages/EditProfilePage/EditProfilePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<AllChatsPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/chat/:id' element={<ChatPage />} />
        <Route path='/profile/edit' element={<EditProfilePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
