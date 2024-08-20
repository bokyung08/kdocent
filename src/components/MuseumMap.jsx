import React, { useState } from 'react';
import '../components/BurgerButton.css'; // 지도의 CSS 스타일

// function MuseumMap({ onClose }) {
//   return (
//     <div className="map-container">
//         <button className="close-button" onClick={onClose}>
//           {/* 유니코드 아이콘 사용 */}
//           &#8594; {/* 유니코드 왼쪽 화살표 */}
//         </button>
//       <h2>미술관 지도</h2>
//       <img src={require('../images/map.png')} alt="Museum Map" className="map-image" />
//     </div>
//   );
// }

function MuseumMap({ onClose }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose(); // 실제로 팝업을 닫음
    }, 400); // 애니메이션 시간과 일치시킴
  };

  return (
    <div className="map-overlay" onClick={handleClose}>
      <div
        className={`map-content ${isClosing ? 'closed' : 'open'}`}
        onClick={(e) => e.stopPropagation()} // 클릭 이벤트 전파 막음
      >
        <h3>❖ 미술관 지도 ❖</h3>
        <img src={require('../images/map.png')} alt="미술관 지도" style={{ width: '100%' }} />
      </div>
    </div>
  );
}

export default MuseumMap;