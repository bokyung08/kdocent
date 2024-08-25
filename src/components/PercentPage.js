import React from 'react';
import styles from './LoginPage.module.css';
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
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>PEŘCENT</h1>
        </div>
        <div className={styles.imageContainer}>
          <img className={styles.monaLisa} src={monaLisaImage}alt="Mona Lisa" />
        </div>
      </div>
    </div>
  );
}

export default PercentPage;
