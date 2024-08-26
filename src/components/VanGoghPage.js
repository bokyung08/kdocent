import message from '../data/message.json';
import { React, useState } from 'react';
import './talking.css'; 
import goghImage from '../images/gogh.png';
import homeImage from '../images/home.png';   
import BurgerButton from './BurgerButton';
import BackButton from './BackButton';
import SendButton from './SendButton';
import NextButton from './NextButton';
import HomeButton from './HomeButton';
import { useParams } from 'react-router-dom';
function VanGoghPage() {
    const { author_answer, museum_answer } = useParams();

    
    var answer = Number(author_answer);
    answer = parseInt(author_answer.substring(author_answer.indexOf("author_answer=")+14, author_answer.indexOf("author_answer=")+15));
    var goghmessage = message.message_unknown;
    if(answer === 1) {
        goghmessage = message.message_known;
    } else if(answer === 2) {
        goghmessage = message.message_wellknown;
    }
    return (
        <div className="container">
            <div className="content">
            <div className='home'><HomeButton></HomeButton></div>
                <div className='burger'><BurgerButton /></div>
                <h1 className="middletitle">반 고흐</h1>
                <div className="image-container">
                    <img 
                        className="vangogh-image" 
                        src={goghImage}
                        alt="반 고흐"
                    />
                </div>
                <div className="description">
                    <p>
                        {goghmessage}
                    </p>
                    <div className="message-bar">
                        <BackButton />
                        <input 
                            className="message-input" 
                            type="text" 
                            placeholder="메시지" 
                        />
                        <SendButton />
                        <NextButton nextPath={`/starry/${answer}`}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VanGoghPage;