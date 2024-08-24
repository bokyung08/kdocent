import Andy from '../images/andy.png';
import Gogh from '../images/gogh.png';
import Pikaso from '../images/pikaso.png';
import React, { useState } from 'react';
import styles from './DocentSelect.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSpring, animated, useTransition } from 'react-spring';

const DocentSelect = () => {
    const navigate = useNavigate();
    


      const docentSelectHandle = (e) => {
        const targetDocent = e.target.className;
        if(targetDocent.search("andy") !== -1) {

        } else if(targetDocent.search("gogh") !== -1) {

        } else if(targetDocent.search("pikaso") !== -1) {

        }
      }

      const handleClick = (key) => {
        const altText = key.target.alt;
        setTimeout(() => {
            navigate(`/survey/${encodeURIComponent(altText)}`);
        }, 500);
      };
    return (
        <>
          <div className={styles.container}>
            <div className= {styles.backgroundColor}>
              <div className= {styles.title}>
                <h1>PEŘCENT</h1>
                <h2>도슨트를 선택하세요</h2>
              </div>
              <div className={styles.imageContainer}>
                <div className={styles.gogh} onClick={docentSelectHandle}/> 
                <div className={styles.andy} onClick={docentSelectHandle}/> 
                <div className={styles.pikaso} onClick={docentSelectHandle}/>
              </div>
            </div>
          </div>
        </>
      );
    };

export default DocentSelect;