import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PercentPage.module.css';
import monaLisaImage from '../images/monarisa.png'; // 이미지 경로와 확장자 확인

function PercentPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/select'); // '/nextPage' 경로로 이동합니다. 원하는 경로로 변경하세요.
    }, 2000); // 2000ms = 2초

    return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 정리합니다.
  }, [navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>PEŘCENT</h1>
        </div>
        <div className={styles.imageContainer}>
          <img className={styles.monaLisa} src={monaLisaImage} alt="Mona Lisa" />
        </div>
      </div>
    </div>
  );
}

export default PercentPage;
