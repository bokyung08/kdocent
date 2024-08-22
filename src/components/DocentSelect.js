import AndyImage from '../images/andy.png';
import AndayBgnd from '../images/andys.png';
import GochImage from '../images/gogh.png';
import GochBgnd from '../images/gochb.png';
import React, { useState } from 'react';
import './DocentSelect.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSpring, animated, useTransition } from 'react-spring';

const DocentSelect = () => {
    const navigate = useNavigate();
    const [clickedImage, setClickedImage] = useState(null);

    const transitions = useTransition(clickedImage, {
        from: { opacity: 0, transform: 'translateY(100px)' },
        enter: { opacity: 1, transform: 'translateY(0px)' },
        leave: { opacity: 0, transform: 'translateY(-100px)' },
        config: { mass: 1, tension: 280, friction: 120 },
      });


      const handleClick = (key) => {
        const altText = key.target.alt;
        setTimeout(() => {
            navigate(`/survey/${encodeURIComponent(altText)}`);
        }, 500);
      };
    return (
        <>
          <div className="old">
            <div className= "background">
              <div className= "percent">
                <h1>PEŘCENT</h1>
              </div>
              {transitions((styles, item) => (
                <animated.div key={item} style={{ ...styles, width: '390px', height: '844px', backgroundColor: '#FFEDEC' }}>
                  <div className= "docent-select">
                    도슨트를 선택하세요
                  </div>
                <div className="image">
                    <img src={AndyImage} alt="andy" width="140" height="130" onClick={handleClick} ></img>
                    <img src={GochImage} alt="goch" width="110" height="130" onClick={handleClick}></img>
                </div>

                <div className="imagesw">
                    <img src={AndayBgnd} alt="" width="320" height="265" ></img>
                    <img src={GochBgnd} alt="" width="320" height="265" ></img>
                </div>
                </animated.div>
              ))}
            </div>
          </div>
        </>
      );
    };

export default DocentSelect;