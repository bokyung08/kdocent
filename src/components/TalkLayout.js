import React, { useEffect, useLayoutEffect, useRef } from 'react';
import styles from './TalkLayout.module.css';
const TalkLayout = (props) => {
    const color = "black";
    const svgRef = useRef(null);
    
    useLayoutEffect( () => {
        const svg = svgRef.current;
        if(svg) {
            const textElement = svg.querySelector('text');
            const bbox = textElement.getBBox(); // 텍스트의 너비와 높이 측정
            const widthAdjustment = 10;
            const newPathData = `M0.5 3C0.5 1.34314 ${bbox.width  + widthAdjustment} 0 ${bbox.width +widthAdjustment+ 10} 0H145.976C147.633 0 148.976 1.34315 148.976 3V37.3644C148.976 38.0354 149.201 38.687 149.615 39.2151L150.873 40.8204C152.659 43.0992 150.5 46.3357 147.71 45.5619L122.283 38.5091C122.021 38.4367 121.752 38.4 121.481 38.4H3.49999C1.84314 38.4 0.5 37.0569 0.5 35.4V3Z`; // 나머지 path 데이터는 텍스트 너비에 맞게 조정

            svg.querySelector('path').setAttribute('d', newPathData);
        }
        }, [svgRef, props.text]);

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