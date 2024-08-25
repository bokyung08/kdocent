import message from '../data/message.json';
import React from 'react';
import styles from './VanGoghPage.module.css'; 
import goghImage from '../images/gogh.png';
import HomeButton from '../components/HomeButton'
import BurgerButton from './BurgerButton';
import BackButton from './BackButton';
import SendButton from './SendButton';
import NextButton from './NextButton';
import { useParams } from 'react-router-dom';
function VanGoghPage() {

    const { answer, snd_answer } = useParams(); // answer { "0" : "잘 모른다", "1" : "어느 정도 안다", "2" : "아주 잘 안다" }
                                                // sad_answer { "0" : "주 1회 이상", "1" : "월 1회 정도", "2", "거의 가지 않음" }
                                                
    var goghmessage = message.message_unknown;
    if(answer === 1) {
        goghmessage = message.message_known;
    } else if(answer === 2) {
        goghmessage = message.message_wellknown;
    }
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h3>반 고흐</h3>
                </div>
                <div className={styles.home}><HomeButton></HomeButton></div>
                <div className={styles.burger}><BurgerButton /></div>
                <div className={styles.mainlayout}>
                    <div className={styles.gogh}/>
                    <div className={styles.description}>
                        <div className={styles.FuckingCSS}>
                            <div className={styles.desText}>
                                {goghmessage}
                            </div>
                            <div className={styles.messagebar}>
                                <BackButton />
                                <input 
                                    className={styles.messageinput} 
                                    type="text" 
                                    placeholder="메시지" 
                                />
                                <SendButton />
                                <NextButton nextPath="/starry"/>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VanGoghPage;
