import Andy from '../images/andy.png';
import Gogh from '../images/gogh.png';
import Pikaso from '../images/pikaso.png';
import React, { useState, useEffect} from 'react';
import styles from './DocentSelect.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSpring, animated, useTransition } from 'react-spring';
import { Button } from 'react-bootstrap';
import CustomBackButton from './CustomBackButton';
import SelectButton from './SelectButton';
import data from '../data/docent.json';
const DocentSelect = () => {
    const navigate = useNavigate();
    const [Fucked, setFucked] = useState(false);
    const [popup, setPopup] = useState('');
    const [FuckingNumber, setFucking] = useState(false);
    const [altShit, setAltShit] = useState(null);

      const docentSelectHandle = (e) => {
        const targetDocent = e.target.className;
        if(targetDocent.search("andy") !== -1) { // 2
          setFucked(!Fucked);
          setFucking(1);
          setAltShit("andy");
          setPopup(<div className={styles.andy} />);
          
        } else if(targetDocent.search("gogh") !== -1) { // 1
          setFucked(!Fucked);
          setFucking(0);
          setAltShit("gogh");
          setPopup(<div className={styles.gogh} />);
          
        } else if(targetDocent.search("pikaso") !== -1) { // 3
          setFucked(!Fucked);
          setFucking(2);
          setAltShit("pikaso");
          setPopup(<div className={styles.pikaso}/>);
        }
      }

      const prevClickHandle = () => {
        console.log("sdadadadd");
        setFucked(!Fucked);
      };

      const handleClick = (key) => {
        const altText = altShit;
        setTimeout(() => {
            navigate(`/survey/${encodeURIComponent(altText)}`);
        }, 500);
      };
    return (
        <>
          <div className={styles.container}>
            { (!Fucked) &&(
              <div className= {styles.backgroundColor}>
                <div className= {styles.title}>
                  <h1>PEŘCENT</h1>
                  <h6>도슨트를 선택하세요</h6>
                </div>
                <div className={styles.imageContainer}>
                  <div className={styles.gogh} onClick={docentSelectHandle}/> 
                  <div className={styles.andy} onClick={docentSelectHandle}/> 
                  <div className={styles.pikaso} onClick={docentSelectHandle}/>
                </div>
            </div>)}
            {
              (Fucked) && (
                <div className= {styles.backgroundColor}>
                  {popup}
                  <div className={styles.textContainer}>
                    {data &&(
                    <div className={styles.text}>
                    <p>{data.docents[FuckingNumber].eng_name}</p>
                    <p style={{fontSize:'0.8rem', fontWeight:'bold', marginTop: '0.3rem'}}>{data.docents[FuckingNumber].kor_name}</p>
                    <p style={{fontSize:'0.4rem'}}>{data.docents[FuckingNumber].since}</p>
                    <p style={{marginTop: '0.8rem'}}>출생</p>
                    <p>{data.docents[FuckingNumber].birth_area}</p>
                    <p style={{marginTop: '0.8rem'}}>대표작</p>
                    <p style={{fontSize: '0.5rem'}}>{data.docents[FuckingNumber].master_piece}</p>
                    <p style={{marginTop: '0.8rem'}}>특징</p>
                    <p>{data.docents[FuckingNumber].feature[0]}</p>
                    <p>{data.docents[FuckingNumber].feature[1]}</p>
                    <p>{data.docents[FuckingNumber].feature[2]}</p>
                    
                    </div>
                    )
                    }
                  </div>
                    <div className={styles.ButtonContainer}>
                    <CustomBackButton className={styles.arrowcontainer} prevClickHandle= {prevClickHandle}/>
                    <SelectButton handleClick={handleClick} />
                    </div>  
                </div>
                )
            }
          </div>
        </>
      );
    };

export default DocentSelect;