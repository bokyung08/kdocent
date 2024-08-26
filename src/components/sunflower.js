import React from 'react';
import './talking.css'; 
import message from '../data/message.json';
import goghImage from '../images/gogh.png';
import sunflowerImage from '../images/sunflower.png';
import homeImage from '../images/home.png';   
import BurgerButton from './BurgerButton';
import BackButton from './BackButton';
import SendButton from './SendButton';
import NextButton from './NextButton';
import { useParams, useLocation } from 'react-router-dom';

function SunflowerPage() {

    const { author_answer, museum_answer } = useParams();

    var answer = author_answer;
    
    var goghmessage = message.message_unknown_sunflower;
    console.log(answer);
    if(answer === 1) {
        goghmessage = message.message_known_sunflower;
    } else if(answer === 2) {
        goghmessage = message.message_known_sunflower;
    }

    return (
        <div className="sunflowercontainer">
            <div className="sunflowercontent">
                <div className='burger'><BurgerButton /></div>
                <h1 className="middletitle">해바라기</h1>
                <div className="image-container">
                    <img 
                        className="sunflower" 
                        src={goghImage}
                        alt="반 고흐의 해바라기"
                    />
                </div>
                <div className="description">
                    <p>
                        {goghmessage}
                    </p>
                    <div className="message-bar">
                        <BackButton beforePath="/starry" />
                        <input 
                            className="message-input" 
                            type="text" 
                            placeholder="메시지" 
                        />
                        <SendButton />
                        <NextButton nextPath={`/self/${answer}`}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SunflowerPage;