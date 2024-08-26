import React, { useState } from 'react';
import styles from './LoginPage.module.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();

    const handleSign = (e) => {
        e.preventDefault();

        // 여기에서 회원가입 로직을 구현할 수 있습니다.
        // 예를 들어, 입력된 데이터를 서버에 전송하여 회원가입을 처리합니다.

        navigate('/last'); // 회원가입 후 다음 페이지로 이동
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>회원가입</h1>
                <form onSubmit={handleSign} className={styles.loginForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">이름</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="phoneNumber">전화번호</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                    </div>
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
                        <label htmlFor="password">비밀번호</label>
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
