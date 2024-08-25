import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './talking.css'; 
import sunflowerImage from '../images/sunflower.png';
import BurgerButton from './BurgerButton';
import BackButton from './BackButton';
import SendButton from './SendButton';
import NextButton from './NextButton';
import Input from './Input'; // 수정된 Input 컴포넌트를 가져옴

function SunflowerPage() {
    const [message, setMessage] = useState('');

    return (
        <div className="sunflowercontainer">
            <div className="sunflowercontent">
                <div className='burger'><BurgerButton /></div>
                <h1 className="middletitle">해바라기</h1>
                <div className="image-container">
                    <img 
                        className="sunflower" 
                        src={sunflowerImage}
                        alt="반 고흐의 해바라기"
                    />
                </div>
                <div className="description">
                    <p>
                        안녕하세요. 이렇게 만나게 되어 반갑습니다. 제 이야기에 관심을 가져주신 것, 정말 감사드립니다. 사실 저는 평범한 삶을 살려고 노력했지만, 항상 마음속에는 설명할 수 없는 감정과 열망이 있었습니다. 저는 캔버스와 물감을 통해 제 감정과 생각을 표현하고자 했습니다.
                    </p>
                    <div className="message-bar">
                        <BackButton beforePath="/starry" />
                        <Input 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)} 
                            placeholder="메시지"
                        />
                        <SendButton /> 
                        <NextButton nextPath="/self"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SunflowerPage;
