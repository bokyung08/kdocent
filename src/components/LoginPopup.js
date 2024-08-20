import React, { useState } from 'react';
import './LoginPopup.css';

function LoginPopup({ onClose }) {
    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <h2>로그인</h2>
                <p>게스트로 입장하시겠습니까?</p>
                <button onClick={onClose} className="close-button">확인</button>
            </div>
        </div>
    );
}

export default LoginPopup;
