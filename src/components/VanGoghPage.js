import MessageData from '../data/message.json';
import React,{useState} from 'react';
import './talking.css'; 
import goghImage from '../images/gogh.png';
import HomeButton from '../components/HomeButton'
import BurgerButton from './BurgerButton';
import BackButton from './BackButton';
import SendButton from './SendButton';
import NextButton from './NextButton';
import { useNavigate } from 'react-router-dom'; 
import Input from'./Input'
import { useParams } from 'react-router-dom';
import styles from './VanGoghPage.module.css'


function VanGoghPage() {
    const { author_answer, museum_answer } = useParams();
    const [message, setMessage] = useState(MessageData.message_unknown);
      // 파라미터 값을 사용하는 로직
    console.log('VanGoghPage :author_answer:', author_answer);
    console.log('museum_answer:', museum_answer);
    if(author_answer === 1) {
        setMessage(MessageData.message_known);
    } else if(author_answer === 2) {
        setMessage(MessageData.message_wellknown);
    }
    return (
        <div className={styles.container}>
            <img 
                className={styles.artist_background}
                src={goghImage}
                alt="반 고흐"
            />
            <div className={styles.content}>
                <div className={styles.widget_bar}>
                    <div className={styles.home}><HomeButton/></div>
                    <h1 className={styles.middletitle}>반 고흐</h1>
                    <div className={styles.burger}><BurgerButton/></div>
                </div>
                
                <div className={styles.message_box}>
                    <div className={styles.description}>
                        <p>
                            {message}
                        </p>
                    </div>

                    <div className={styles.message_bar}>
                        <BackButton />
                        <Input 
                            
                            onChange={(e) => setMessage(e.target.value)} 
                            placeholder="메시지"
                        />
                        <SendButton author_answer={author_answer}  museum_answer={museum_answer}/>
                        <NextButton nextPath="/starry"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VanGoghPage;