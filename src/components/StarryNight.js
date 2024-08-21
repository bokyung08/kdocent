import React from 'react';
import './talking.css'; 
import goghImage from '../images/gogh.png';
import homeImage from '../images/home.png';   
import BurgerButton from './BurgerButton';
import BackButton from './BackButton';
import SendButton from './SendButton';
import NextButton from './NextButton';

function StarryNight() {
    return (
        <div className="starrycontainer">
            <div className="starrycontent">
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
                        안녕하세요.
                    </p>
                    <div className="message-bar">
                        <BackButton beforePath="/gogh"/>
                        <input 
                            className="message-input" 
                            type="text" 
                            placeholder="메시지" 
                        />
                        <SendButton />
                        <NextButton nextPath="/sunflower" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StarryNight;
