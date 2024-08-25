import React from 'react';
import { useNavigate } from 'react-router-dom';

function Input({ value, onChange, placeholder }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/chatbot'); // input 필드를 클릭하면 /chatbot 페이지로 이동
    };

    return (
        <input 
            type="text" 
            value={value} 
            onChange={onChange} 
            onClick={handleClick} 
            placeholder={placeholder}
            className="message-input"
        />
    );
}

export default Input;
