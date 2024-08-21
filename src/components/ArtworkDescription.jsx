import React from 'react';
import './ArtworkDescription.css'; // 스타일 파일

function ArtworkDescription({ isOpen, onClose, imageUrl, title, description }) {
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
        <h2>{title}</h2> {/* 동적으로 제목 렌더링 */}
        <p dangerouslySetInnerHTML={{__html : description}}></p> {/* 동적으로 설명 렌더링 */}
      </div>
    </div>
  );
}

export default ArtworkDescription;
