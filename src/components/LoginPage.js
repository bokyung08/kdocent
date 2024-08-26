import React, { useState } from 'react';
import monaLisaImage from '../images/monarisa.png';
import GuestImage from '../images/Guest.png';
import naverImage from '../images/naver.png';
import kakaoImage from '../images/kakao.png';
import styles from './LoginPage.module.css'; 
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();

    const handleGuestLogin = () => {
        navigate('/select'); // '/chatbot' 경로로 이동
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h1>PEŘCENT</h1>
                </div>
                <div className={styles.imageContainer}>
                    <img className={styles.monaLisaLogin} src={monaLisaImage} alt="Mona Lisa" />
                    <div className={styles.buttonContainer}>
                        <button className={styles.guestButton} onClick={handleGuestLogin}>
                            <img className={styles.guestIcon} src={GuestImage} alt="guest" />
                            <span>게스트로 로그인</span>
                        </button>
                        <button className={styles.kakaoButton}>
                            <img className={styles.kakaoIcon} src={kakaoImage} alt="kakao" />
                        </button>
                        <button className={styles.naverButton}>
                            <img className={styles.naverIcon} src={naverImage} alt="naver" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
