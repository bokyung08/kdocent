import React from 'react';
import { useNavigate } from 'react-router-dom';

function SendButton({onClick, from = 'none'}) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/chatbot'); // 특정 페이지로 이동
    };

    return (
    <>
        <button className="send-button" onClick={ () => {handleClick(); from === "chatbot" && onClick()}}>✉️</button>
    </>
    );
}

export default SendButton;
