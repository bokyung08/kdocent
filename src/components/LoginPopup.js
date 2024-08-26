import React, { useState } from 'react';
import styles from './LoginPage.module.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/survey/:alt');
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>로그인</h1>
                <form onSubmit={handleLogin} className={styles.loginForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="username">ID</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">password</label>
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
