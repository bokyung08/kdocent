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
        <h2>❖ 작품 리스트 ❖</h2>
        {/* --- */}
        <hr />
        <ul>
          <h3>세션 1. "현실과 내면의 탐구"</h3>
            <li>- 감자먹는 사람들</li>
            <li>- 자화상 1887</li>
          <h3>세션 2. "빛과 생명: 해바라기와 자화상"</h3>
            <li>- 해바라기</li>
            <li>- 자화상 1889</li>
	        <h3>세션 3. "고독 속의 희망과 새로운 시작"</h3>
            <li>- 별이 빛나는 밤</li>
            <li>- 꽃 피는 아몬드 나무</li> 
        </ul>
        <hr />
        {/* --- */}
        <h3><u>☻ 미술관 지도</u></h3>
        <h3><u>☻ 고객센터</u></h3>
      </div>
    </div>
  );
}

export default BurgerButton;
