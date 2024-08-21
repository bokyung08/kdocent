import React, { useState, createContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import './DocentSelect.css';
import { click } from '@testing-library/user-event/dist/click';

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

const ButtonGroup = ({ onButtonClick , bpag }) => {
    const [buttons, setButtons] = useState([
        { text: '잘 모른다', isClicked: false, newMessage: '주 1회 이상' },
        { text: '어느 정도 안다', isClicked: false, newMessage: '월 1회 정도' },
        { text: '아주 잘 안다', isClicked: false, newMessage: '거의 가지 않음' },
      ]);
      
    const [isClicked, setIsClicked] = useState(false);
    const [clickedButtons, setClickedButtons] = useState([]);
    
    const handleClick = (button) => {
      if (clickedButtons.length <= 2) {
        setIsClicked(true);
        setClickedButtons([...clickedButtons, button.text]);
      } else {
        console.log('버그발생: 사용자로부터 3개이상의 값을 받아옴.');
        console.log(clickedButtons.length);
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