import React from 'react';
import './talking.css'; 
import goghImage from '../images/gogh.png';
import homeImage from '../images/home.png';   
import BurgerButton from './BurgerButton';

function StarryNight() {
    return (
        <div className="starrycontainer">
            <div className="starrycontent">
                <img 
                    className='home'
                    src={homeImage}
                    alt='홈'
                />
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
                        <button className="back-button">⬅</button>
                        <input 
                            className="message-input" 
                            type="text" 
                            placeholder="메시지" 
                        />
                        <button className="send-button">✉️</button>
                        <button className="next-button">➡</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StarryNight;
