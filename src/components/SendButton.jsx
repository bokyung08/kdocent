import React from 'react';
import { useNavigate } from 'react-router-dom';

function SendButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/sendpage'); // 특정 페이지로 이동
    };

    return (
        <button className="send-button" onClick={handleClick}>✉️</button>
    );
}

export default SendButton;
