import React from 'react';
import '../components/BurgerButton.css'; // 지도의 CSS 스타일

function MuseumMap({ onClose }) {
  return (
    <div className="map-container">
        <button className="close-button" onClick={onClose}>
          {/* 유니코드 아이콘 사용 */}
          &#10145; {/* 유니코드 왼쪽 화살표 */}
        </button>
      <h2>미술관 지도</h2>
      <img src={require('../images/map.png')} alt="Museum Map" className="map-image" />
    </div>
  );
}

export default MuseumMap;