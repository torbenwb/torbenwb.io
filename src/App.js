import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/torbenwb.io/" element={<Home/>} />
    </Routes>
  );
}

export default App;
