import React from 'react';
import styles from './LoginPage.module.css'; 
import { useNavigate } from 'react-router-dom';

function LastPage() {
    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/'); 
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <p>더 나은 서비스를 위해 평가해주세요</p>
                </div>
                <div className={styles.imageContainer}>
                    <div className={styles.buttonContainer}>
                        <a href="https://forms.gle/NaTiTkafoVe8UsUSA" className={styles.guestButton}onClick={handleHome} target="_blank" rel="noopener noreferrer">
                            <span>만족도 조사</span>
                        </a>
                        <button className={styles.guestButton} onClick={handleHome}> 
                            <span>돌아가기</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LastPage;
