import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PercentPage from './components/PercentPage';
import LoginPage from './components/LoginPage';
import TalkingPage from './components/TalkingPage';
import VanGoghPage from './components/VanGoghPage';
import StarryNight from './components/StarryNight';
import SunFlower from './components/sunflower';
import Self from './components/SelfPage';
import Self2 from './components/Self2Page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PercentPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/talking" element={<TalkingPage />} />
        <Route path="/gogh" element={<VanGoghPage />} />
        <Route path="/starry" element={<StarryNight />} />
        <Route path="/sunflower" element={<SunFlower />} />
        <Route path="/self" element={<Self />} />
        <Route path="/self2" element={<Self2 />} />
      </Routes>
    </Router>      
  );
}

export default App;
