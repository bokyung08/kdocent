import message from '../data/message.json';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'; 
import './talking.css'; 
import goghImage from '../images/gogh.png';
import homeImage from '../images/home.png';   
import BurgerButton from './BurgerButton';
import BackButton from './BackButton';
import SendButton from './SendButton';
import NextButton from './NextButton';
import Input from './Input'; // 수정된 Input 컴포넌트를 가져옴
function StarryNight() {
    const [message, setMessage] = useState('');
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
                        {message.message_main}
                    </p>
                    <div className="message-bar">
                        <BackButton beforePath="/gogh"/>
                        <Input 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)} 
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
