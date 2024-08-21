import React from 'react';
import { useNavigate } from 'react-router-dom';

function BackButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1); // 이전 페이지로 이동
    };

    return (
        <button className="back-button" onClick={handleClick}>⬅</button>
    );
}

export default BackButton;
