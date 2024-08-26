import React from 'react';
import { useNavigate } from 'react-router-dom';

function BackButton({ beforePath }) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (beforePath) {
            navigate(beforePath); // 지정된 이전 경로로 이동
        } else {
            navigate(-1); // 이전 경로가 없으면 브라우저 히스토리에서 이전 페이지로 이동
        }
    };

    return (
        <button className="back-button" onClick={handleClick}>⬅</button>
    );
}

export default BackButton;