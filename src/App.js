import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PercentPage from './components/PercentPage';
import LoginPage from './components/LoginPage';
import TalkingPage from './components/TalkingPage';
import VanGoghPage from './components/VanGoghPage';
import StarryNight from './components/StarryNight';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PercentPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/talking" element={<TalkingPage />} />
        <Route path="/gogh" element={<VanGoghPage />} />
        <Route path="/starry" element={<StarryNight />} /> 
      </Routes>
    </Router>
  );
}

export default App;
