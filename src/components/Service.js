import React from 'react';
import styled from 'styled-components';

import Arrowsrc from '../assets/arrow_forward.svg';
import Emailsrc from '../assets/email.png';
import Donatesrc from '../assets/donate.png';

const Section = styled.section`
  background: #FFF;
  padding: 104px 36px;
  @media ${props => props.theme.device.tablet} {
    padding: 64px 36px;
  }
  @media ${props => props.theme.device.mobile} {
    padding: 64px 16px;
  }
`;

const CenterBox = styled.div`
  width: 100%;
  & > div {
    margin: 64px auto 0px;
  }
  @media ${props => props.theme.device.mobile} {
    margin: 40px auto 0px;
  }
`;

const ServiceContainer = styled.div`
  width: 100%;
  max-width: 1320px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  @media ${props => props.theme.device.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CardContainer = styled.div`
  background: ${props => props.bgcolor};
  scroll-margin-top: 120px;
  border-radius: 32px;
  padding: 96px;
  color: var(--default-white, #FFF);

  @media ${(props) => props.theme.device.tablet},
  {
    padding: 40px 24px;
    border-radius: 16px;
  }
  @media ${(props) => props.theme.device.mobile},
  {
    padding: 40px 24px;
    border-radius: 16px;
  }
`;

const Title = styled.div`
  font-family: MantouSans;
  white-space: nowrap;
  font-size: 52px;
  @media ${props => props.theme.device.tablet},
  ${props => props.theme.device.mobile},
  {
    font-size: 40px;
  }
 
    
  }
`;

const Context = styled.div`
  font-size: 20px;
  font-weight: 700;
  min-height: 60px;
  
`;

const ButtonImgContainer = styled.div`
  display: grid;
  grid-template-columns: 152px 1fr;
  align-items: center;
  gap: 10px;

  @media ${(props) => props.theme.device.desktop},
  {
    height: 214px;
  }
  @media ${(props) => props.theme.device.tablet},
  {
    height: 126px;
  }
  @media ${(props) => props.theme.device.mobile},
  {
    height: 129px;
  }
`;

const ButtonClass = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 500px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  background: var(--gray-100, #F1F5F9);
  padding: 16px 24px;
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
  color: #334155;
`;

const ArrowImg = styled.img`
  height: 22px;
  width: 22px;
`;

const CardSubImg = styled.img`
  @media ${(props) => props.theme.device.desktop},
  
  {
    width: 241px;
    max-height: 241px;
  }
  @media ${(props) => props.theme.device.tablet},
  ${(props) => props.theme.device.mobile},
  {
    width: 126px;
    max-height: 126px;
  }
  width: 241px;
  max-height: 241px;
  object-fit: contain;
`;

const CardSubImgContainer = styled.div`
 display: flex;
 justify-content: flex-end;
`;

const Service = () => {
  return (
    <Section>
      <CenterBox>
        <ServiceContainer>
          <CardContainer bgcolor='#DA7D4A'>
            <Title>小額支持喵喵</Title>
            <Context>您的小筆捐款，是每隻毛孩未來的大大動力！</Context>
            <ButtonImgContainer>
              <ButtonClass>
                <ButtonText>查看更多</ButtonText>
                <ArrowImg src={Arrowsrc} />
              </ButtonClass>
              <CardSubImgContainer><CardSubImg src={Donatesrc} /></CardSubImgContainer>
            </ButtonImgContainer>
          </CardContainer>
          <CardContainer bgcolor='#334155'>
            <Title>民眾服務信箱</Title>
            <Context>親愛的鄉親，每一位市民的意見都是我們社區前進的原動力</Context>
            <ButtonImgContainer>
              <ButtonClass>
                <ButtonText>查看更多</ButtonText>
                <ArrowImg src={Arrowsrc} />
              </ButtonClass>
              <CardSubImgContainer><CardSubImg src={Emailsrc} /></CardSubImgContainer>
            </ButtonImgContainer>
          </CardContainer>
        </ServiceContainer>
      </CenterBox>
    </Section>
  );
};
export default Service;