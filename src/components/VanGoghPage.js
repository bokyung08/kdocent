import message from '../data/message.json';
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

function VanGoghPage() {
    var { answer } = useParams();
    const [message, setMessage] = useState('');
    answer = Number(answer);
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
                <div className="description">
                    <p>
                        {goghmessage}
                    </p>
                    <div className="message-bar">
                        <BackButton />
                        <Input 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)} 
                            placeholder="메시지"
                        />
                        <SendButton />
                        <NextButton nextPath="/starry"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VanGoghPage;
