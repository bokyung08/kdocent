import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useParams, useNavigate} from 'react-router-dom';
import styles from './ChatBotPage.module.css';

function ChatApp() {
    const location = useLocation(); 
    const navigate = useNavigate(); // useNavigate 훅을 사용
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState(''); 
    const [selectedModel, setSelectedModel] = useState(location.state?.selectedModel || 'picasso');
    const [loading, setLoading] = useState(false);
    const endOfMessagesRef = useRef(null);
    const pathname = location.pathname;
    const author_answer = parseInt(pathname.substring(pathname.indexOf("author_answer=")+14, pathname.indexOf("author_answer=")+15));
    const museum_answer = parseInt(pathname.substring(pathname.indexOf("museum_answer=")+14, pathname.indexOf("museum_answer=")+15));
    // author_answer { "0" : "잘 모른다", "1" : "어느 정도 안다", "2" : "아주 잘 안다" }
    // museum_answer { "0" : "주 1회 이상", "1" : "월 1회 정도", "2", "거의 가지 않음" }

    const artistNames = {
        pikaso: "Pablo Picasso",
        andy: "Andy Warhol",
        gogh: "Vincent van Gogh"
    };

    const artistName = artistNames[selectedModel] || 'Art';
  
    useEffect(() => {
        if (location.state?.initialMessage) {
            setInput(location.state.initialMessage);
            sendMessage(location.state.initialMessage);
        }
    }, [location.state?.initialMessage]);

    useEffect(() => {
        switch (selectedModel) {
            case 'pikaso': 
                document.body.style.backgroundImage = "url('../images/sunflowerbackground.png')";
                break;
            case 'andy': 
                document.body.style.backgroundImage = "url('../images/selfbackground.png')";
                break;
            case 'gogh': 
                document.body.style.backgroundImage = "url('../images/theStarryNight.jpg')";
                break;
            default:
                document.body.style.backgroundImage = 'none';
                break;
        }
    }, [selectedModel]);

    const sendMessage = async (messageToSend = input.trim()) => {
        if (messageToSend === '') return;

        setInput(''); 

        const newMessage = { sender: 'user', text: messageToSend };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setLoading(true);

        try {
            const response = await fetch('http://localhost:5000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: messageToSend, model: selectedModel }),
            });

            if (response.ok) {
                const data = await response.json();
                const botMessage = { sender: 'bot', text: data.response || 'No response from server' };
                setMessages((prevMessages) => [...prevMessages, botMessage]);
            } else {
                const botMessage = { sender: 'bot', text: 'Error: Could not retrieve response from server.' };
                setMessages((prevMessages) => [...prevMessages, botMessage]);
            }
        } catch (error) {
            const botMessage = { sender: 'bot', text: 'Error: Network error occurred.' };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        }

        setLoading(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage(); 
        }
    };

    useEffect(() => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // 뒤로 가기 버튼 클릭 핸들러
    const handleGoBack = () => {
        navigate(-1); // 이전 페이지로 이동
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <button onClick={handleGoBack} className={styles.backButton}>
                    &larr; Back
                </button>
                <div className={styles.middletitle}>Chat with {artistName}</div>
                <div style={{ border: '1px solid #ccc', padding: '10px', height: '400px', overflowY: 'scroll' }}>
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            style={{
                                textAlign: message.sender === 'user' ? 'right' : 'left',
                                margin: '10px 0',
                            }}
                        >
                            <strong>{message.sender === 'user' ? 'You: ' : 'Bot: '}</strong>
                            {message.text}
                        </div>
                    ))}
                    <div ref={endOfMessagesRef}></div>
                </div>
                <div className={styles['message-bar']}>
                    <input
                        type="text"
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                        onKeyDown={handleKeyPress}
                        className={styles['message-input']}
                    />
                    <button onClick={() => sendMessage()} className={styles.button}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ChatApp;
