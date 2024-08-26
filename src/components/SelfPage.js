import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom'; 
import './talking.css';  
import messaged from '../data/message.json';
import self2Image from '../images/self.png';
import homeImage from '../images/home.png';   
import BurgerButton from './BurgerButton';
import BackButton from './BackButton';
import SendButton from './SendButton';
import NextButton from './NextButton';
import Input from './trash/Input';
import HomeButton from './HomeButton';
import { useParams } from 'react-router-dom';

function SelfPage() {

    const { author_answer, museum_answer } = useParams();

    
    var answer = author_answer;
    var goghmessage = messaged.message_unknown_self;
    if(answer === 1) {
        goghmessage = messaged.message_known_self;
    } else if(answer === 2) {
        goghmessage = messaged.message_known_self;
    }
    const [message, setMessage] = useState('');
    return (
        <div className="selfcontainer">
            <div className="selfcontent">
            <div className='home'><HomeButton></HomeButton></div>
                <div className='burger'><BurgerButton /></div>
                <h1 className="middletitle">자화상</h1>
                <div className="image-container">
                    <img 
                        className="self" 
                        src={self2Image}
                        alt="반 고흐"
                    />
                </div>
                <div className="description">
                <p style={{width: '90vw', height:'20vh' ,overflowY:'scroll', margin: '0'}}>
                            {goghmessage}
                        </p>
                    
                </div>
                <div className="message-bar">
                        <BackButton beforePath="/sunflower"/>
                        <Input 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)} 
                            placeholder="메시지"
                        />
                        <SendButton />
                        <NextButton nextPath={`/self2/${answer}`}/>
                    </div>
            </div>
        </div>
    );
}

export default SelfPage;
