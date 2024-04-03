import React from 'react';
import styled, { keyframes } from 'styled-components';

const Marquee_container = styled.div`
  background: var(--primary-color, #DA7D4A);
  padding: 10px;
  max-width: 100%;
  overflow: hidden;
`; 

const marqueee = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% - 280px));
  }
`;

const Marquee_content = styled.div`
  display: flex;
  white-space: nowrap;
  gap: 24px;
  animation: 20s linear 0s infinite normal none running ${marqueee};
  flex-shrink: 0;
  justify-content: flex-start;
  min-width: 100%;


  `; 

const Marquee_text = styled.div`
  color: var(--default-white, #FFF);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: MantouSans;
  font-style: normal;
  font-weight: 400;
  line-height: 105%;
  letter-spacing: 2px;


  @media 
  ${(props) => props.theme.device.desktop},
  {
    font-size: 64px;
  }
  @media 
  ${(props) => props.theme.device.tablet},
  ${(props) => props.theme.device.mobile},
  {
    font-size: 40px;
  }
  
`;


  
const Marquee = () => {
  return (
    <Marquee_container>
      <Marquee_content>
        <Marquee_text>為喵星人，護台灣！</Marquee_text>
        <Marquee_text>從喵的眼中，看見台灣</Marquee_text>
        <Marquee_text>喵的未來，人的希望</Marquee_text>
        <Marquee_text>為喵星人，護台灣！</Marquee_text>
        <Marquee_text>從喵的眼中，看見台灣</Marquee_text>
        <Marquee_text>喵的未來，人的希望</Marquee_text>
      </Marquee_content>
    </Marquee_container>
  );
};
export default Marquee;