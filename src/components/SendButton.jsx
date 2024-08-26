import React from 'react';
import { useNavigate } from 'react-router-dom';

function SendButton({onClick, from = 'none', author_answer, museum_answer}) {
    const navigate = useNavigate();

    console.log('SendButton :author_answer:', author_answer);
    console.log('museum_answer:', museum_answer);
    const handleClick = () => {
        navigate(`/chatbot/${author_answer}/${museum_answer}`); // 특정 페이지로 이동
    };

    return (
    <>
        <button className="send-button" onClick={ () => {handleClick(); from === "chatbot" && onClick()}}>➢</button>
    </>
    );
}

export default SendButton;
