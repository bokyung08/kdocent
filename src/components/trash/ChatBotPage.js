import React, { useState, useEffect, useRef, useParams } from 'react';
import SendButton from '../SendButton';
import NextButton from '../NextButton';
import BackButton from '../BackButton';
import TalkLayout from '../TalkLayout';
import BurgerButton from '../BurgerButton';
import styles from './ChatBotPage.module.css';

function Chatbot() {
    const { author_answer, museum_answer } = useParams();
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);  // 로딩 상태 추가
    const endOfMessagesRef = useRef(null);  // 자동 스크롤을 위한 ref
    const sendMessage = async () => {
        if (input.trim() === '') return;

    const sendMessage = async () => {
        if (input.trim() === '') return;
    
        const newMessage = { sender: 'user', text: input };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setInput('');
        setLoading(true);  // 로딩 상태 시작
    
        try {
            const response = await fetch('http://localhost:5000/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: input }),
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log('Server response:', data);  // 서버 응답 확인
    
                const botMessage = { sender: 'bot', text: data.response || 'No response from server' };
                setMessages((prevMessages) => [...prevMessages, botMessage]);
            } else {
                console.log('Response not OK:', response.status);  // 응답 상태 코드 확인
                const botMessage = { sender: 'bot', text: 'Error: Could not retrieve response from server.' };
                setMessages((prevMessages) => [...prevMessages, botMessage]);
            }
        } catch (error) {
            console.error('Network error:', error);  // 네트워크 오류 확인
            const botMessage = { sender: 'bot', text: 'Error: Network error occurred.' };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        }
    
        setLoading(false);  // 로딩 상태 종료
    };
    
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    };

    // 자동 스크롤을 위한 useEffect
    useEffect(() => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className={styles.starrycontent}>

            <h1 className={styles.middletitle}>반 고흐</h1>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div style={{ border: '1px solid #ccc', padding: '10px', height: '400px', overflowY: 'scroll' }}>
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            style={{
                                textAlign: message.sender === 'user' ? 'right' : 'left',
                                margin: '10px 0',
                            }}
                        >
                            {/* <strong>{message.sender === 'user' ? 'You: ' : 'Bot: '}</strong> */}
                            <TalkLayout text={message.text} from={message.sender} />
                        </div>
                    ))}
                    <div ref={endOfMessagesRef} />  {/* 자동 스크롤을 위한 ref */}
                </div>
                <div style={styles.messagebar}>

                    <BackButton />
                    <input
                        className={styles.messageinput} 
                        placeholder="메시지" 
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyPress}
                        style={{ flex: 1, padding: '10px', border: '1px solid #ccc' }}
                    />
                    <SendButton onClick={sendMessage} from="chatbot">
                        {loading ? 'Sending...' : 'Send'}  {/* 로딩 상태 표시 */}
                    </SendButton>
                    <NextButton nextPath="/starry"/>
                </div>
            </div>
        </div>
    );
}

export default Chatbot;
