import React, { useState } from 'react';
import styles from './LoginPage.module.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSign = (e) => {
        e.preventDefault();
        navigate('/last');
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>회원가입</h1>
                <form onSubmit={handleSign} className={styles.loginForm}>
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
                    <button type="submit" className={styles.loginButton}>회원가입</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
