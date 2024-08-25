import message from '../data/message.json';
import React, { useState, createContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import styles from './DocentSelect.module.css';
import { click } from '@testing-library/user-event/dist/click';
import { useNavigate } from 'react-router-dom';

const IsClickedContext = createContext(false);

const VerticalButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CustomButton = styled(Button)`
  padding: 1rem 2rem;
  border-radius: 30px;
  font-size: 18px;
  width: 230px;
  height: 50px;
  color: white;
  background-color: #350034;
  margin-bottom: 40px;
  z-index: 1;
`;

    var answer = 0;
    var snd_answer = 0;
const ButtonGroup = ({ onButtonClick , bpag }) => {
    const navigate = useNavigate();
    const [buttons, setButtons] = useState([
        { text: message.survey_unknown, isClicked: false, newMessage: '주 1회 이상' },
        { text: message.survey_known, isClicked: false, newMessage: '월 1회 정도' },
        { text: message.survey_wellknown, isClicked: false, newMessage: '거의 가지 않음' },
      ]);
      
    const [isClicked, setIsClicked] = useState(false);
    const [clickedButtons, setClickedButtons] = useState([]);
    
    const handleClick = (button) => {
      console.log(button.text);
      console.log(clickedButtons.length);
      if (clickedButtons.length < 1) { // 정말 뭐지 싶은 코드지만 시간이 없고 어찌됐던 결과는 원하는대로 동작하는 듯하다. 난 이 코드를 이해할 수 없다.
        setIsClicked(true);
        setClickedButtons([...clickedButtons, button.text]);
        if(button.text === '어느 정도 안다')
          answer = 1;
        else if (button.text === '아주 잘 안다')
          answer = 2;
      } else {
        snd_answer = button.newMessage === '월 1회 정도' ? 1 : 2;
        navigate(`/gogh/answer=${answer}/snd_answer=${snd_answer}`);
        
      }};
      return (
            <IsClickedContext.Provider value={{ isClicked, handleClick }}>
                <VerticalButtonGroup>
                    {buttons.map((button, index) => (
                      
                    <CustomButton key={index} variant="dark" onClick={() => {
                            handleClick(button);
                            bpag();
                        }}
                    >
                        {isClicked ? button.newMessage : button.text}
                    </CustomButton>
                    ))}
                </VerticalButtonGroup>
        </IsClickedContext.Provider>
      );
    }

export default ButtonGroup;