import message from '../data/message.json';
import React, { useState, createContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import styles from './DocentSelect.module.css';
import { click } from '@testing-library/user-event/dist/click';
import { useNavigate } from 'react-router-dom';

const IsClickedContext = createContext(false);

const VerticalSurveyButton = styled.div`
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
const SurveyButton = (props) => {
    const navigate = useNavigate();
    const [author_answer, setAuthorAnswer] = useState(0);
    const [museum_answer, setMuseumAnswer] = useState(0);
    // author_answer { "0" : "잘 모른다", "1" : "어느 정도 안다", "2" : "아주 잘 안다" }
    // museum_answer { "0" : "주 1회 이상", "1" : "월 1회 정도", "2", "거의 가지 않음" }

    const [surveyData, setsurveyData] = useState([
        { text: message.survey_unknown, isClicked: false, newMessage: '주 1회 이상' },
        { text: message.survey_known, isClicked: false, newMessage: '월 1회 정도' },
        { text: message.survey_wellknown, isClicked: false, newMessage: '거의 가지 않음' },
      ]);
      
    const [isClicked, setIsClicked] = useState(false);
    const [clickedsurveyData, setClickedsurveyData] = useState([]);
    
    const handleClick = (surveyObject) => {
      if (clickedsurveyData.length < 1) {
        setIsClicked(true);
        setClickedsurveyData([...clickedsurveyData, surveyObject.text]);
        setAuthorAnswer(surveyObject.text === '어느 정도 안다' ? 1 : surveyObject.text === '아주 잘 안다' ? 2 : 0);
        console.log(surveyObject.text);
      } else {
        setMuseumAnswer(surveyObject.newMessage === '월 1회 정도' ? 1 : surveyObject.newMessage === '거의 가지 않음' ? 2 : 0 );
        console.log(surveyObject.newMessage === '월 1회 정도' ? 1 : surveyObject.newMessage === '거의 가지 않음' ? 2 : 0);
        // ? 왜 안되지 
        navigate(`/gogh/author_answer=${author_answer}/museum_answer=${surveyObject.newMessage === '월 1회 정도' ? 1 : surveyObject.newMessage === '거의 가지 않음' ? 2 : 0}`);
        
      }};
      return (
            <IsClickedContext.Provider value={{ isClicked, handleClick }}>
                <VerticalSurveyButton>
                    {surveyData.map((surveyObject, index) => (
                      
                    <CustomButton key={index} variant="dark" onClick={() => {
                            handleClick(surveyObject);
                            props.setMessage();
                        }}
                    >
                        {isClicked ? surveyObject.newMessage : surveyObject.text}
                    </CustomButton>
                    ))}
                </VerticalSurveyButton>
        </IsClickedContext.Provider>
      );
    }

export default SurveyButton;