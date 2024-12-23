import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import HistoryPage from './pages/HistoryPage/HistoryPage';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/history' element={<HistoryPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App
