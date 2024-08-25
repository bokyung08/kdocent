import React, { useState } from 'react';
import styles from './LoginPage.module.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // 여기에 로그인 로직을 추가할 수 있습니다.
        // 예를 들어, 서버로부터 사용자 인증을 받는 작업 등을 수행할 수 있습니다.

        // 로그인 성공 시 다른 페이지로 이동 (예: 대시보드 페이지)
        navigate('/dashboard');
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>로그인</h1>
                <form onSubmit={handleLogin} className={styles.loginForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="username">사용자 이름</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">비밀번호</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.loginButton}>로그인</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
