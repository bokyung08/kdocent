import React, { useState } from 'react';
import './talking.css';  
import self2Image from '../images/self2.png';
import homeImage from '../images/home.png';   
import BurgerButton from './BurgerButton';


function self() {
    
    return (
        <div className="self2container">
            <div className="self2content">
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
                        안녕하세요. 이렇게 만나게 되어 반갑습니다. 제 이야기에 관심을 가져주신 것, 정말 감사드립니다. 사실 저는 평범한 삶을 살려고 노력했지만, 항상 마음속에는 설명할 수 없는 감정과 열망이 있었습니다. 저는 캔버스와 물감을 통해 제 감정과 생각을 표현하고자 했습니다.
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

export default self;
