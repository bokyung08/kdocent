import React,{useState} from 'react';
import './talking.css';  
import { useNavigate } from 'react-router-dom'; 
import self2Image from '../images/self2.png';
import messaged from '../data/message.json';
import homeImage from '../images/home.png';   
import BurgerButton from './BurgerButton';
import BackButton from './BackButton';
import SendButton from './SendButton';
import NextButton from './NextButton';
import HomeButton from './HomeButton';
import Input from './trash/Input'; // 수정된 Input 컴포넌트를 가져옴
import { useParams } from 'react-router-dom';
function Self2Page() {
    const { author_answer, museum_answer } = useParams();

    
    var answer = author_answer;
    var goghmessage = messaged.message_unknown_self2;
    if(answer === 1) {
        goghmessage = messaged.message_known_self2;
    } else if(answer === 2) {
        goghmessage = messaged.message_known_self2;
    }
    const [message, setMessage] = useState('');
    return (
        <div className="self2container">
            <div className="self2content">
            <div className='home'><HomeButton></HomeButton></div>
                <div className='burger'><BurgerButton /></div>
                <h1 className="middletitle">자화상2</h1>
                <div className="image-container">
                    <img 
                        className="self" 
                        src={self2Image}
                        alt="반 고흐"
                    />
                </div>
                <div className="description">
                    <p>
                        {goghmessage}
                    </p>
                    <div className="message-bar">
                        <BackButton beforePath="/self" />
                        <Input 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)} 
                            placeholder="메시지"
                        />
                        <SendButton />
                        <NextButton nextPath="/signup"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Self2Page;
