import React from 'react';
import './HomeButton.css';
import {useNavigate} from 'react-router-dom';

const HomeButton = ({ clearHistory}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        // clearHistory(); // 대화 히스토리 삭제
        navigate('/select');
    };

    return (
        <button className="home-button" onClick={handleClick}>
            &#x2302;
        </button>
    )
};

export default HomeButton;