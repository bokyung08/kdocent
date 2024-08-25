import React, { useEffect, useLayoutEffect, useRef } from 'react';
import styles from './TalkLayout.module.css';
const TalkLayout = (props) => {
    return (
        <div className={styles.wrap}>
            {props.from === 'user' ? (
            <div className={styles.ch1}>
                <div className={styles.icon}><i className="fa-solid fa-user"></i></div>
                <div className={styles.textbox}>{props.text}</div>
            </div>
            )
            :
            (
            <div className={styles.ch2}>
                <div className={styles.icon}><i className="fa-solid fa-user"></i></div>
                <div className={styles.textbox}>{props.text}</div>
            </div>
        ) }
        </div>
    );
};

export default TalkLayout;