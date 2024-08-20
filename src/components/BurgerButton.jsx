import React, { useState } from 'react';
import './BurgerButton.css'; // CSS 파일을 불러옵니다.

function BurgerButton() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    setIsRotated(!isRotated); // 버튼 회전 상태 토글
  };

  return (
    <>
      <button
        className={`burger-button ${isRotated ? 'rotated' : ''}`}
        onClick={togglePopup}
      >
        &#9776; {/* 버거 아이콘 (유니코드) */}
      </button>
      <Popup isOpen={isPopupOpen} onClose={togglePopup} />
    </>
  );
}

function Popup({ isOpen, onClose }) {
  return (
    <div
      className={`popup-overlay ${isOpen ? 'open' : ''}`}
      onClick={onClose}
    >
      <div
        className={`popup-content ${isOpen ? 'open' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h3>❖ 미술관 지도</h3>
        <hr />
        <ul>
          <li><h4>Part 1. Self-Portraits</h4></li>
          <li><h4>Part 2. Landscapes</h4></li>
          <li><h4>Part 3. Flowers</h4></li>
        </ul>
        <hr />
        <h4>☻ 고객센터</h4>
      </div>
    </div>
  );
}

export default BurgerButton;
