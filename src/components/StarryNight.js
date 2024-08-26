import message from '../data/message.json';
import React from 'react';
import './talking.css'; 
import goghImage from '../images/gogh.png';
import homeImage from '../images/home.png';   
import BurgerButton from './BurgerButton';
import BackButton from './BackButton';
import SendButton from './SendButton';
import NextButton from './NextButton';
import HomeButton from './HomeButton';
import { useParams } from 'react-router-dom';

function StarryNight() {
    const { author_answer, museum_answer } = useParams();

    console.log("authoranswer" + author_answer);
    var answer = author_answer;
    var goghmessage = message.message_unknown_star;
    if(answer === 1) {
        goghmessage = message.message_known_star;
    } else if(answer === 2) {
        goghmessage = message.message_known_star;
    }


    return (
        <div className="starrycontainer">
            <div className="starrycontent">
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
                        <BackButton beforePath="/gogh"/>
                        <input 
                            className="message-input" 
                            type="text" 
                            placeholder="메시지" 
                        />
                        <SendButton />
                        {console.log("ㅁㄴㅇㄴㅁㅇㅁㅇ"+answer)}
                        <NextButton nextPath={`/sunflower/${answer}`} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StarryNight;