import React from 'react';
import './PercentPage.css';
import monaLisaImage from '../images/monarisa.png'; // 이미지 경로와 확장자 확인
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function PercentPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000); // 3초 후에 로그인 화면으로 이동

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [navigate]);

  return (
    <div className="container">
      <div className="header">
      </div>
      <div className="content">
        <h1 className="title">PERCENT</h1>
        <div className="imageContainer">
          <img className="monaLisa" src={monaLisaImage}alt="Mona Lisa" />
        </div>
      </div>
    </div>
  );
}

export default PercentPage;
