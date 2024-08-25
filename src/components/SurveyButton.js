import message from '../data/message.json';
import React, { useState, createContext, useEffect } from 'react';
import surveyObject from 'react-bootstrap/surveyObject';
import styled from 'styled-components';
import styles from './DocentSelect.module.css';
import { click } from '@testing-library/user-event/dist/click';
import { useNavigate } from 'react-router-dom';

const IsClickedContext = createContext(false);

const VerticalSurveysurveyObject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CustomsurveyObject = styled(surveyObject)`
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
const SurveysurveyObject = (props) => {
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
        if(surveyObject.text === '어느 정도 안다')
          author_answer = 1;
        else if (surveyObject.text === '아주 잘 안다')
          author_answer = 2;
      } else {
        setMuseumAnswer(surveyObject.newMessage === '월 1회 정도' ? 1 : 2);
        navigate(`/gogh/author_answer=${author_answer}/museum_answer=${museum_answer}`);
        
      }};
      return (
            <IsClickedContext.Provider value={{ isClicked, handleClick }}>
                <VerticalSurveysurveyObject>
                    {surveyData.map((surveyObject, index) => (
                      
                    <CustomsurveyObject key={index} variant="dark" onClick={() => {
                            handleClick(surveyObject);
                            props.setMessage();
                        }}
                    >
                        {isClicked ? surveyObject.newMessage : surveyObject.text}
                    </CustomsurveyObject>
                    ))}
                </VerticalSurveysurveyObject>
        </IsClickedContext.Provider>
      );
    }

export default SurveysurveyObject;