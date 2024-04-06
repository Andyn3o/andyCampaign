import React from 'react';
import styled from 'styled-components';

import Policy1Imgsrc from '../assets/Policy1.png';
import Policy2Imgsrc from '../assets/Policy2.png';
import Policy3Imgsrc from '../assets/Policy3.png';

const PolicyContainer = styled.div`
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

const SectionLogo = styled.div`
  border-radius: var(--spacer-8, 8px);
  background: var(--text-primary-700, #334155);
  color: rgb(255, 255, 255);
  width: fit-content;
  padding: var(--spacer-8, 8px) var(--spacer-12, 12px);
  font-size: 16px;
  line-height: normal;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
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

const ContentBox = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: 64px auto 0px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 64px;
  @media ${(props) => props.theme.device.tablet},
  {
    column-gap: 32px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

`;

const CardTitle = styled.div`
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: left;
  padding: 0px 16px 16px;
`;

const CardImg = styled.img`
  object: cover;
  width: 100%
  border-radius: 24px;

  @media ${(props) => props.theme.device.mobile},{

    border-radius: 16px;
  }
`;

const Policy = () => {
  return (
    <PolicyContainer>
      <TitleBox>
        <SectionLogo>POLICY ISSUES</SectionLogo>
        <Title>政策議題</Title>
      </TitleBox>
      <ContentBox>
        <CardContainer>
          <CardTitle>為毛孩子謀福利！<br />推動寵物醫療保障方案</CardTitle>
          <CardImg src={Policy1Imgsrc} />
        </CardContainer>
        <CardContainer>
          <CardTitle>打造休閒天堂！<br />推廣寵物休閒與娛樂場所</CardTitle>
          <CardImg src={Policy2Imgsrc} />
        </CardContainer>
        <CardContainer>
          <CardTitle>推廣寵物飼養教育<br />讓愛更加專業</CardTitle>
          <CardImg src={Policy3Imgsrc} />
        </CardContainer>
      </ContentBox>
    </PolicyContainer>
  );
};
export default Policy;