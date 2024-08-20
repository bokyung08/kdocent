import React from 'react';
import './ArtworkDescription.css'; // 스타일 파일

function ArtworkDescription({ isOpen, onClose, imageUrl }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      const content = document.querySelector('.artwork-description-content');
      content.classList.add('closed');
      setTimeout(() => {
        content.classList.remove('closed');
        onClose();
      }, 400); // 애니메이션 시간과 동일하게 설정 (0.4s)
    }
  };

  return (
    <div
      className={`artwork-description-overlay ${isOpen ? 'open' : ''}`}
      onClick={handleOverlayClick}
    >
      <div
        className={`artwork-description-content ${isOpen ? 'open' : 'closed'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {imageUrl && <img src={imageUrl} alt="작품 이미지" className="artwork-image" />}
        <h2>별이 빛나는 밤</h2>
        <p><strong>빈센트 반 고흐, 1889년</strong></p>
        <p><strong>시대:</strong> 탈인상주의, 근대 미술</p>
        <p><strong>위치:</strong> 프랑스 남부의 생레미드프로방스</p>
        <p><strong>제작 시기:</strong> 정신병원에 입원 당시 제작</p>
        <p>고흐의 정신적 고통과 예술적 영감이 동시에 최고조에 달했던 시기의 작품으로, 그의 내면의 갈등과 정서적 격동이 화폭에 강렬하게 표현된 것으로 평가하고 있습니다.</p>
        <p>이 시기에 제작된 작품들은 고흐의 감정과 에너지가 집약된 걸작들로, 그가 겪었던 고통이 예술적 창조로 승화된 과정을 보여줍니다.</p>
        <p><a href="https://artsandculture.google.com/asset/the-starry-night/bgEuwDxel93-Pg?hl=ko" className="more-info-link" target="_blank" rel="noopener noreferrer">작품 더 알아보기</a></p>
      </div>
    </div>
  );
}

export default ArtworkDescription;
