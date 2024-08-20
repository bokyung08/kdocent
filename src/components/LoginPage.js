import React,{useState} from 'react';
import monaLisaImage from '../images/monarisa.png';
import GuestImage from '../images/Guest.png';
import naverImage from '../images/naver.png';
import kakaoImage from '../images/kakao.png';
import './LoginPage.css'; 
import LoginPopup from './LoginPopup';


function LoginPage() {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const togglePopup = () => {
        setPopupOpen(!isPopupOpen);
    };
    return (
        <div className="container">
            <div className="header">
            </div>
            <div className="content">
                <h1 className="title">PEŘCENT</h1>
                <div className="imageContainer">

                <div className="buttonContainer">
                <img className="monaLisaLogin" src={monaLisaImage} alt="Mona Lisa" />
                    <button className="guestButton"onClick={togglePopup}>
                        <img className="guestIcon" src={GuestImage} alt="guest" />                      <span>게스트로 입장</span>
                    </button>
                    <button className="kakaoButton">
                        <img className="kakaoIcon" src={kakaoImage} alt="kakao" />
                    </button>
                    <button className="naverButton">
                        <img className="naverIcon" src={naverImage} alt="naver" />
                    </button>
                    </div>
                </div>
            </div>
            {isPopupOpen && <LoginPopup onClose={togglePopup} />}
        </div>
    );
}

export default LoginPage;
