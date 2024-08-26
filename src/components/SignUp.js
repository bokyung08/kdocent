import React, { useState } from 'react';
import monaLisaImage from '../images/monarisa.png';
import GuestImage from '../images/Guest.png';
import naverImage from '../images/naver.png';
import kakaoImage from '../images/kakao.png';
import styles from './LoginPage.module.css'; 
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();
    const handleStar=()=>{
        navigate('')
    }

    const handleSignup = () => {
        navigate('/sign'); 
    };
    const handleLast = () => {
        navigate('/last'); 
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
                        <button className={styles.guestButton} onClick={handleSignup}>
                            <img className={styles.guestIcon} src={GuestImage} alt="guest" />
                            <span>게스트 회원가입</span>
                        </button>
                        <button className={styles.guestButton} onClick={handleLast}> 
                            <span>넘어가기</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
