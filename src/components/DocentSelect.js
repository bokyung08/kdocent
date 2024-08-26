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
import data from '../data/docentData/docent.json';
const DocentSelect = () => {
    const navigate = useNavigate();
    const [isPopup, setisPopup] = useState(false);
    const [popup, setPopup] = useState('');
    const [isDocentsID, setisDocentsID] = useState(false);
    const [altText, setaltText] = useState(null);

      const docentSelectHandle = (e) => {
        const targetDocent = e.target.className;
        if(targetDocent.search("andy") !== -1) { // 2
          setisPopup(!isPopup);
          setisDocentsID(1);
          setaltText("andy");
          setPopup(<div className={styles.andy} />);
          
        } else if(targetDocent.search("gogh") !== -1) { // 1
          setisPopup(!isPopup);
          setisDocentsID(0);
          setaltText("gogh");
          setPopup(<div className={styles.gogh} />);
          
        } else if(targetDocent.search("pikaso") !== -1) { // 3
          setisPopup(!isPopup);
          setisDocentsID(2);
          setaltText("pikaso");
          setPopup(<div className={styles.pikaso}/>);
        }
      }

      const prevClickHandle = () => {
        setisPopup(!isPopup);
      }; 

      const handleClick = (e) => {
        setTimeout(() => {
            navigate(`/survey/${encodeURIComponent(altText)}`);
        }, 500);
      };
    return (
        <>
          <div className={styles.container}>
            { (!isPopup) &&(
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
              (isPopup) && (
                <div className= {styles.backgroundColor}>
                  <div className= {styles.popupTextContainer}>
                  {popup}
                    <div className={styles.textContainer}>
                        {data &&(
                        <div className={styles.text}>
                          <p style={{fontSize:'2.5vh', fontWeight:'400', marginBottom: '1vh', fontFamily: 'sans-serif'}}> {data.docents[isDocentsID].eng_name}</p>
                          <p style={{fontSize:'3.5vh', fontWeight:'900', margin: '0', fontFamily:'F'}}>{data.docents[isDocentsID].kor_name}</p>
                          <p style={{fontSize:'1.8vh', fontWeight:'400', margin: '0'}}>{data.docents[isDocentsID].since}</p>
                          <p style={{fontSize:'2.5vh', fontWeight:'600', marginBottom: '0', marginTop: '4vh'}}>출생</p>
                          <p style={{fontSize:'2.0vh', fontWeight:'600', marginBottom: '0', marginTop: '1vh'}}>{data.docents[isDocentsID].birth_area}</p>
                          <p style={{fontSize:'2.5vh', fontWeight:'600', marginBottom: '0', marginTop: '4vh'}}>대표작</p>
                          <p style={{fontSize:'1.7vh', fontWeight:'600', marginBottom: '0', marginTop: '1vh'}}>{data.docents[isDocentsID].master_piece}</p>
                          <p style={{fontSize:'2.5vh', fontWeight:'600', marginBottom: '0', marginTop: '4vh'}}>특징</p>
                          <p style={{fontSize:'1.8vh', fontWeight:'600', marginBottom: '0', marginTop: '1vh'}}>{data.docents[isDocentsID].feature[0]}</p>
                          <p style={{fontSize:'1.8vh', fontWeight:'600', marginBottom: '0', marginTop: '1vh'}}>{data.docents[isDocentsID].feature[1]}</p>
                          <p style={{fontSize:'1.8vh', fontWeight:'600', marginBottom: '0', marginTop: '1vh'}}>{data.docents[isDocentsID].feature[2]}</p>
                        </div>
                        )
                      }
                      </div>
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