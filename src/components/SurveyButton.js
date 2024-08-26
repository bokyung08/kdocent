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
  padding: 0.8rem 2rem;
  border: 2px solid transparent;
  border-radius: 30px; /* 둥근 모서리 */
  font-size: 16px;
  font-weight: bold;
  margin: 1rem;
  color: #fff;
  z-index: 10;
  background: linear-gradient(145deg, #6a1b9a, #8e24aa); /* 세련된 그라디언트 배경 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
  cursor: pointer;
  transition: all 0.3s ease; /* 모든 스타일 속성에 부드러운 전환 효과 적용 */
  position: relative;
  overflow: hidden; /* 내부 콘텐츠가 버튼을 넘지 않도록 설정 */

  /* Hover 상태 */
  &:hover {
    background: linear-gradient(145deg, #8e24aa, #6a1b9a); /* Hover 시 배경색 반전 */
    transform: translateY(-3px); /* Hover 시 버튼이 살짝 위로 이동 */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Hover 시 그림자 확대 */
  }

  /* Active 상태 */
  &:active {
    background: linear-gradient(145deg, #6a1b9a, #8e24aa); /* 클릭 시 배경색 유지 */
    transform: translateY(1px); /* 클릭 시 버튼이 살짝 아래로 이동 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 클릭 시 그림자 복원 */
  }

  /* Focus 상태 (키보드 탐색 시) */
  &:focus {
    outline: none; /* 기본 포커스 아웃라인 제거 */
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5); /* 포커스 시 그림자 추가 */
  }

  /* ::after 가상 요소 */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2); /* 반투명 오버레이 효과 */
    border-radius: 30px;
    transform: scale(0); /* 초기 상태에서 보이지 않도록 설정 */
    transition: transform 0.3s ease; /* 부드러운 전환 효과 */
    z-index: 0; /* 버튼 아래에 위치 */
  }

  /* Hover 상태에 따른 ::after 가상 요소 스타일 */
  &:hover::after {
    transform: scale(1); /* Hover 시 가시화 */
  }

  /* 버튼 텍스트 스타일 */
  span {
    position: relative;
    z-index: 1; /* 버튼 위에 텍스트를 위치시킴 */
  }
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