import Monarisa from '../images/monarisab.png';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './SurveyPage.module.css';
import 'animate.css'
import SurveyButton from './SurveyButton';

const SurveyPage = () => {
    const [message, setMessage] = useState("");
    const { alt } = useParams();
    let author = null;
    let particle = null;
    if(alt === 'andy') {
        author = '앤디 워홀';
        particle = '을';
    } else if (alt === 'gogh') {
        author = '빈센트 반 고흐'
        particle = '를';
    } else if (alt === 'pikaso') {
        author = '파블로 피카소';
        particle = '를'
    }

    useEffect(() => {
        setMessage(`${author} ${particle} 얼마나 아시나요?`);
    }, [author, particle]);
    
    const setIsMuseumMessage = () => {
        setMessage("전시회를 얼마나 자주 가시나요?");
    }
    return (
        <>
            <div className={styles.container}>
                <div className= {styles.content}>
                    <div className= {styles.title}>
                        <h1>PEŘCENT</h1>
                        <h6>{message}</h6>
                    </div>
                    <div className={styles.text}>
                        <div className={styles.slidedown}>
                            <div className={styles.buttonContainer}>
                                <SurveyButton setMessage={setIsMuseumMessage} />   
                            </div>                 
                        </div>
                    </div>
                    <div className={styles.slideup}>
                        <div className={styles.monarisa}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SurveyPage;