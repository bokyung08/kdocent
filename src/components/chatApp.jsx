import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styles from './ChatBotPage.css';

function ChatApp() {
    const location = useLocation(); 
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState(location.state?.initialMessage || ''); 
    const [selectedModel, setSelectedModel] = useState(location.state?.selectedModel || 'picasso');
    const [loading, setLoading] = useState(false);
    const endOfMessagesRef = useRef(null);
    const pathname = location.pathname;
    const author_answer = parseInt(pathname.substring(pathname.indexOf("author_answer=")+14, pathname.indexOf("author_answer=")+15));
    const museum_answer = parseInt(pathname.substring(pathname.indexOf("museum_answer=")+14, pathname.indexOf("museum_answer=")+15));
    // author_answer { "0" : "잘 모른다", "1" : "어느 정도 안다", "2" : "아주 잘 안다" }
    // museum_answer { "0" : "주 1회 이상", "1" : "월 1회 정도", "2", "거의 가지 않음" }
    useEffect(() => {
        if (location.state?.initialMessage) {
            sendMessage(); 
        }
    }, [location.state?.initialMessage]);

    const sendMessage = async () => {
        const messageToSend = input.trim();
        if (messageToSend === '') return;

        const newMessage = { sender: 'user', text: messageToSend };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setInput('');
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

    useEffect(() => {
        switch (selectedModel) {
            case 'picasso':
                document.body.style.backgroundImage = "url('../images/sunflowerbackground.png')";
                break;
            case 'warhol':
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

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.middletitle}>Chat with Art</div>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        Select Model:
                        <select
                            value={selectedModel}
                            onChange={(e) => setSelectedModel(e.target.value)}
                            style={{ marginLeft: '10px', padding: '5px' }}
                        >
                            <option value="picasso">Picasso</option>
                            <option value="warhol">Warhol</option>
                            <option value="gogh">Gogh</option>
                        </select>
                    </label>
                </div>
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
                    <button onClick={sendMessage} className={styles.button}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ChatApp;
