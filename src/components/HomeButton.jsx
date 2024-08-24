import React, { useState } from 'react';
import './HomeButton.css';
import {useNavigate} from 'react-router-dom';

const HomeButton = ({ clearHistory }) => {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);

    // 홈 버튼 클릭 시 팝업창을 열도록 상태를 변경
    const handleClick = () => {
        setShowPopup(true);
    };

    // 팝업창 외부(overlay)를 클릭하면 팝업창을 닫음
    const handleOverlayClick = (e) => {
        // 만약 클릭한 요소가 팝업창 자체가 아니라면 팝업창을 닫음
        if (e.target === e.currentTarget) {
            setShowPopup(false);
        }
    };

    // "확인" 버튼 클릭 시 팝업창을 닫고 페이지 이동
    const handleConfirm = () => {
        setShowPopup(false);
        setTimeout(() => navigate('/select'), 300); // 애니메이션이 끝난 후 페이지 이동
    };

    // "취소" 버튼 클릭 시 팝업창을 닫음
    const handleCancel = () => {
        setShowPopup(false);
    };

    return (
        <div>
            <button className="home-button" onClick={handleClick}>
                &#x2302;
            </button>

            {/* 팝업창이 보일 때만 렌더링 */}
            {showPopup && (
                <div style={styles.overlay} onClick={handleOverlayClick}>
                    <div style={{ ...styles.popup, animation: showPopup ? 'popupIn 0.3s ease-out' : 'popupOut 0.3s ease-in' }}>
                        <p>도슨트를 다시 선택 하시겠습니까?</p>
                        <div style={styles.buttons}>
                            <button style={styles.okbutton} onClick={handleConfirm}>
                                확인
                            </button>
                            <button style={styles.nobutton} onClick={handleCancel}>
                                취소
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // 어두운 배경을 위한 반투명 레이어
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000, // 팝업이 다른 요소들 위에 나타나도록 설정
    },
    popup: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        opacity: 1, // 초기 opacity
        transform: 'scale(1)', // 초기 크기
    },
    buttons: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'space-around',
    },
    okbutton: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        backgroundColor: '#007BFF',
        color: 'white',
        fontSize: '16px',
    },
    nobutton: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        backgroundColor: '#ED5353',
        color: 'white',
        fontSize: '16px',
    },
};

// CSS 애니메이션을 정의
const popupIn = `
@keyframes popupIn {
    0% {
        opacity: 0;
        transform: scale(0.5); // 팝업이 작게 시작
    }
    100% {
        opacity: 1;
        transform: scale(1); // 팝업이 원래 크기로 확장
    }
}
`;

const popupOut = `
@keyframes popupOut {
    0% {
        opacity: 1;
        transform: scale(1); // 팝업이 원래 크기에서
    }
    100% {
        opacity: 0;
        transform: scale(0.5); // 팝업이 작아지면서 사라짐
    }
}
`;

// 페이지에 애니메이션을 추가
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(popupIn, styleSheet.cssRules.length);
styleSheet.insertRule(popupOut, styleSheet.cssRules.length);

export default HomeButton;