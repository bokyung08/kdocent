import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PercentPage from './components/PercentPage';
import LoginPage from './components/LoginPage';
import VanGoghPage from './components/VanGoghPage';
import StarryNight from './components/StarryNight';
import SunFlower from './components/sunflower';
import Self from './components/self';
import Self2 from './components/self2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PercentPage />} />
        <Route path="/login" element={<LoginPage />} />
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
