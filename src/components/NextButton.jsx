import React from 'react';
import { useNavigate } from 'react-router-dom';

function NextButton({ nextPath }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(nextPath); // 다음 페이지 경로로 이동
    };

    return (
        <button className="next-button" onClick={handleClick}>➡</button>
    );
}

export default NextButton;
