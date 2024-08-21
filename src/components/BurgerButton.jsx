import React, { useState } from 'react';
import './BurgerButton.css';
import MuseumMap from './MuseumMap';

import ArtworkDescription from './ArtworkDescription';
import starryNightImage from '../images/theStarryNight.jpg';
import potatoEatersImage from '../images/potatoEaters.jpg';
import selfPortrait1887Image from '../images/selfPortrait1887.jpg';
import sunflowersImage from '../images/sunflowers.jpg';
import selfPortrait1889Image from '../images/selfPortrait1889.jpg';
import almondBlossomImage from '../images/almondBlossom.jpg';

function BurgerButton() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    setIsRotated(!isRotated); 
  };

  const openMap = () => {
    setIsMapOpen(true);
    setIsPopupOpen(false);
  };

  const closeMap = () => {
    setIsMapOpen(false);
  };

  const openDescription = (artwork) => {
    setSelectedArtwork(artwork);
  };

  const closeDescription = () => {
    setSelectedArtwork(null);
  };

  const artworks = [
    { 
      title: '감자먹는 사람들', 
      imageUrl: potatoEatersImage, 
      description: `
        <p><strong>빈센트 반 고흐, 1885년</strong></p>
        <p><strong>시대:</strong> 사실주의, 초기 작품</p>
        <p><strong>위치:</strong> 네덜란드 누엔엔</p>
        <p><strong>제작 시기:</strong> 농촌 생활을 관찰하며 제작</p>
        <p>이 작품은 반 고흐가 네덜란드에서 농민들의 삶을 묘사하며 그들의 힘든 노동을 강조한 작품입니다. 어두운 색조와 거친 필치가 농민들의 고된 삶을 상징적으로 표현하고 있습니다.</p>
        <p>반 고흐는 이 작품을 통해 도시 문명과 대비되는 농촌의 현실적인 삶을 전달하고자 했으며, 인간의 본질에 대한 깊은 탐구를 시도했습니다.</p>
        <p><a href="https://artsandculture.google.com/asset/the-potato-eaters/nQFdG7z1N9xwlQ?hl=ko" target="_blank" rel="noopener noreferrer">작품 더 알아보기</a></p>
      `,
    },
    { 
      title: '자화상 1887', 
      imageUrl: selfPortrait1887Image, 
      description: `
        <h2>자화상 1887</h2>
        <p><strong>빈센트 반 고흐, 1887년</strong></p>
        <p><strong>시대:</strong> 인상주의, 파리 시기</p>
        <p><strong>위치:</strong> 프랑스 파리</p>
        <p><strong>제작 시기:</strong> 인상파 화가들과 교류하며 제작</p>
        <p>이 자화상은 반 고흐가 파리에서 인상파 화가들과 교류하며 자신의 스타일을 발전시키던 시기에 그린 작품입니다. 밝은 색채와 부드러운 터치가 특징입니다.</p>
        <p>이 시기의 자화상들은 반 고흐의 내면적 탐구를 반영하며, 그의 감정 상태와 예술적 진화 과정을 엿볼 수 있게 합니다.</p>
        <p><a href="https://artsandculture.google.com/asset/self-portrait/WwE-RZ_l7pU7CQ?hl=ko" target="_blank" rel="noopener noreferrer">작품 더 알아보기</a></p>
      `,
    },
    { 
      title: '해바라기', 
      imageUrl: sunflowersImage, 
      description: `
        <p><strong>빈센트 반 고흐, 1888년</strong></p>
        <p><strong>시대:</strong> 탈인상주의</p>
        <p><strong>위치:</strong> 프랑스 아를</p>
        <p><strong>제작 시기:</strong> 폴 고갱을 맞이하기 위해 제작</p>
        <p>반 고흐는 아를에서 그의 친구 폴 고갱을 맞이하기 위해 이 해바라기 시리즈를 제작했습니다. 해바라기는 반 고흐의 상징적인 소재로, 생명력과 활기를 나타냅니다.</p>
        <p>이 작품은 밝고 강렬한 색채가 특징이며, 반 고흐의 감정이 고스란히 담긴 걸작으로 평가받고 있습니다.</p>
        <p><a href="https://artsandculture.google.com/asset/sunflowers/iQHdeTY-SHNCvA?hl=ko" target="_blank" rel="noopener noreferrer">작품 더 알아보기</a></p>
      `,
    },
    { 
      title: '자화상 1889', 
      imageUrl: selfPortrait1889Image, 
      description: `
        <p><strong>빈센트 반 고흐, 1889년</strong></p>
        <p><strong>시대:</strong> 탈인상주의, 근대 미술</p>
        <p><strong>위치:</strong> 프랑스 생레미드프로방스</p>
        <p><strong>제작 시기:</strong> 정신병원에 입원 당시 제작</p>
        <p>이 자화상은 반 고흐가 정신병원에 입원해 있던 시기에 그려졌습니다. 깊은 고통과 예술적 열망이 드러나는 작품으로, 그의 복잡한 내면 세계가 표현되어 있습니다.</p>
        <p>반 고흐는 이 자화상에서 자신의 감정을 진솔하게 드러내며, 그의 고뇌와 불안이 화폭에 강렬하게 표현되었습니다.</p>
        <p><a href="https://artsandculture.google.com/asset/self-portrait/QgF3A9_x7qXDwA?hl=ko" target="_blank" rel="noopener noreferrer">작품 더 알아보기</a></p>
      `,
    },
    { 
      title: '별이 빛나는 밤', 
      imageUrl: starryNightImage, 
      description: `
        <p><strong>빈센트 반 고흐, 1889년</strong></p>
        <p><strong>시대:</strong> 탈인상주의, 근대 미술</p>
        <p><strong>위치:</strong> 프랑스 남부의 생레미드프로방스</p>
        <p><strong>제작 시기:</strong> 정신병원에 입원 당시 제작</p>
        <p>고흐의 정신적 고통과 예술적 영감이 동시에 최고조에 달했던 시기의 작품으로, 그의 내면의 갈등과 정서적 격동이 화폭에 강렬하게 표현된 것으로 평가하고 있습니다.</p>
        <p>이 시기에 제작된 작품들은 고흐의 감정과 에너지가 집약된 걸작들로, 그가 겪었던 고통이 예술적 창조로 승화된 과정을 보여줍니다.</p>
        <p><a href="https://artsandculture.google.com/asset/the-starry-night/bgEuwDxel93-Pg?hl=ko" target="_blank" rel="noopener noreferrer">작품 더 알아보기</a></p>
      `,
    },
    { 
      title: '꽃 피는 아몬드 나무', 
      imageUrl: almondBlossomImage, 
      description: `
        <p><strong>빈센트 반 고흐, 1890년</strong></p>
        <p><strong>시대:</strong> 탈인상주의</p>
        <p><strong>위치:</strong> 프랑스 생레미드프로방스</p>
        <p><strong>제작 시기:</strong> 조카의 출생을 기념하기 위해 제작</p>
        <p>이 작품은 고흐가 그의 조카 빈센트의 출생을 기념하기 위해 그린 작품으로, 희망과 새로운 시작을 상징합니다. 꽃 피는 아몬드 나무는 생명의 회복과 부활을 의미합니다.</p>
        <p>고흐의 밝고 생동감 있는 색채와 힘찬 붓질이 이 작품에서 돋보이며, 그의 감정이 고스란히 담긴 작품으로 평가받고 있습니다.</p>
        <p><a href="https://artsandculture.google.com/asset/almond-blossom/1QGOm_gAOEOf_Q?hl=ko" target="_blank" rel="noopener noreferrer">작품 더 알아보기</a></p>
      `,
    },
  ];

  return (
    <>
      <button
        className={`burger-button ${isRotated ? 'rotated' : ''}`}
        onClick={togglePopup}
      >
        &#9776; {/* 버거 아이콘 (유니코드) */}
      </button>
      <div className={`popup-container ${selectedArtwork ? 'blurred' : ''}`}>
        <Popup 
          isOpen={isPopupOpen} 
          onClose={togglePopup} 
          onMapOpen={openMap} 
          onArtworkClick={openDescription} 
          artworks={artworks} 
        />
      </div>
      {isMapOpen && <MuseumMap onClose={closeMap} />}
      {selectedArtwork && (
        <ArtworkDescription 
          isOpen={!!selectedArtwork} 
          onClose={closeDescription} 
          imageUrl={selectedArtwork.imageUrl} 
          title={selectedArtwork.title} 
          description={selectedArtwork.description}
        />
      )}
    </>
  );
}

function Popup({ isOpen, onClose, onMapOpen, onArtworkClick, artworks }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      const content = document.querySelector('.popup-content');
      content.classList.add('closed');
      setTimeout(() => {
        content.classList.remove('closed');
        onClose();
      }, 400);
    }
  };

  return (
    <div
      className={`popup-overlay ${isOpen ? 'open' : ''}`}
      onClick={handleOverlayClick}
    >
      <div
        className={`popup-content ${isOpen ? 'open' : 'closed'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>❖ 작품 리스트 ❖</h2>
        <hr />
        <ul>
          <h3>세션 1. "현실과 내면의 탐구"</h3>
          <li onClick={() => onArtworkClick(artworks[0])}>- 감자먹는 사람들</li>
          <li onClick={() => onArtworkClick(artworks[1])}>- 자화상 1887</li>
          <h3>세션 2. "빛과 생명: 해바라기와 자화상"</h3>
          <li onClick={() => onArtworkClick(artworks[2])}>- 해바라기</li>
          <li onClick={() => onArtworkClick(artworks[3])}>- 자화상 1889</li>
          <h3>세션 3. "고독 속의 희망과 새로운 시작"</h3>
          <li onClick={() => onArtworkClick(artworks[4])}>- 별이 빛나는 밤</li>
          <li onClick={() => onArtworkClick(artworks[5])}>- 꽃 피는 아몬드 나무</li>
        </ul>
        <hr />
        <h3><u onClick={onMapOpen} className="clickable-text">☻ 미술관 지도</u></h3>
        <h3><u>☻ 고객센터</u></h3>
      </div>
    </div>
  );
}

export default BurgerButton;
