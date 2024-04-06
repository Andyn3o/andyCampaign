import React from 'react';
import styled from 'styled-components';

import EventLogo from '../assets/event.svg';
import MainEventImgsrc from '../assets/MainEvent.png';
import GEvent1Imgsrc from '../assets/GEvent1.png';
import GEvent2Imgsrc from '../assets/GEvent2.png';
import Arrowsrc from '../assets/arrow_forward.svg';

const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media 
  ${(props) => props.theme.device.desktop},
  {
    padding: 104px 36px;
  }
  @media 
  ${(props) => props.theme.device.tablet},
  {
    padding: 64px 32px;
  }

  @media 
  ${(props) => props.theme.device.mobile},
  {
    padding: 64px 16px;
  }
`;

const TitleBox = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media
  ${(props) => props.theme.device.tablet},
  { 
    gap: 3px;
  }
`;

const SectionLogo = styled.img`
  width: 154px;
  height: 40px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: MantouSans;
  font-feature-settings: 'clig' off, 'liga' off;
  letter-spacing: 2px;
  font-weight: 400;
  line-height: 105%;
  background: -webkit-linear-gradient(left, #E5793B 1.54%, #FF4185 97.86%);
  width: fit-content;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  @media
  ${(props) => props.theme.device.desktop},
  { 
      font-size: 64px;
  }
  @media
  ${(props) => props.theme.device.tablet},
  ${(props) => props.theme.device.mobile},
  {
      font-size: 52px;
      padding: 8px 0px;
  }
`;


const EventBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  max-width: 1320px;
  gap: 24px;
  margin: 64px 0px 0px;
  @media ${(props) => props.theme.device.tablet},
  {
    flex-direction: column;
  }
  
  @media ${(props) => props.theme.device.mobile},
  {
    flex-direction: column;
  }
`;

const MainEvent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  flex-direction: column;
  @media ${(props) => props.theme.device.desktop},
  {
    max-width: 648px;
  }
  @media ${(props) => props.theme.device.tablet},
  @media ${(props) => props.theme.device.mobile},
  {
    gap: 8px;
  }
`;

const GeneralEventSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SubGeneralEvent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const MainEventImg = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 16px;
  max-height: 413px;
`;

const MainEventDescription = styled.div`
  font-family: Inter;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const GeneralEventDescription = styled.div`
  font-family: Inter;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const DateStyle = styled.div`
  font-size: 14px;
  color: #94a3b8;
`;

const TitleStyle = styled.div`
  color: var(--text-primary, #334155);
  font-size: ${props => props.fontSize || '20px'};
  font-weight: 700;
}
`;

const ContextStyle = styled.div`
  color: var(--text-primary, #334155);
  font-size: 16px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;



const GeneralEventImg = styled.img`
  object-fit: cover;
  width: 200px;
  height: 134px;
  min-width: 200px;
  min-height: 134px;
  border-radius: 16px;
`;

const ButtonClass = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 500px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  background: var(--gray-100, #F1F5F9);
  padding: var(--spacer-16, 16px) var(--spacer-24, 24px);
  cursor: pointer;
  flex-shrink: 0;
  height: fit-content;
  width: fit-content;
  max-height: 66px;
  max-width: 154px;
`;

const ButtonText = styled.h1`
  font-size: 16px;
  line-height: normal;
  font-weight: 700;
  color: var(--text-primary);
`;

const ArrowImg = styled.img`
  height: 22px;
  width: 22px;
`;

const LatestEvent = () => {
  return (
    <EventContainer>
      <TitleBox>
        <SectionLogo src={EventLogo} />
        <Title>最新活動</Title>
      </TitleBox>
      <EventBox>
        <MainEvent>
          <MainEventImg src={MainEventImgsrc} />
          <MainEventDescription>
            <DateStyle>2023/12/26</DateStyle>
            <TitleStyle>參與台北寵物論壇，爭取貓咪友善環境</TitleStyle>
            <ContextStyle>炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。</ContextStyle>
          </MainEventDescription>
        </MainEvent>
        <GeneralEventSection>
          <SubGeneralEvent>
            <GeneralEventImg src={GEvent1Imgsrc} />
            <GeneralEventDescription>
              <DateStyle>2023/12/24</DateStyle>
              <TitleStyle fontSize='16px'>掃街模式開啟！帶著你的貓耳，來和我一起走！</TitleStyle>
              <ContextStyle>街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！</ContextStyle>
            </GeneralEventDescription>
          </SubGeneralEvent>
          <SubGeneralEvent>
            <GeneralEventImg src={GEvent2Imgsrc} />
            <GeneralEventDescription>
              <DateStyle>2023/12/20</DateStyle>
              <TitleStyle fontSize='16px'>收容所模特兒大比拼！</TitleStyle>
              <ContextStyle>今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！</ContextStyle>
            </GeneralEventDescription>
          </SubGeneralEvent>

          <SubGeneralEvent>
            <GeneralEventImg src={MainEventImgsrc} />
            <GeneralEventDescription>
              <DateStyle>023/12/26</DateStyle>
              <TitleStyle fontSize='16px'>參與台北寵物論壇，爭取貓咪友善環境</TitleStyle>
              <ContextStyle>街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！</ContextStyle>
            </GeneralEventDescription>
          </SubGeneralEvent>
          <ButtonClass>
            <ButtonText>查看更多</ButtonText>
            <ArrowImg src={Arrowsrc} />
          </ButtonClass>
        </GeneralEventSection>
      </EventBox>
    </EventContainer>
  );
};
export default LatestEvent;