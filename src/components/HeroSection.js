import React from 'react';
import styled from 'styled-components';

import avatar_ori from '../assets/avatar_big.png';
import fbLogoPath from '../assets/fblogo.svg';
import igLogoPath from '../assets/instalogo.svg';
import ytLogoPath from '../assets/ytlogo.svg';

const Slogan = styled.div`
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
      white-space: nowrap;
      margin-top: 96px;
  }
  @media
  ${(props) => props.theme.device.tablet},
  ${(props) => props.theme.device.mobile},
  {
      
      font-size: 52px; 
      white-space: pre;
      margin-top: 32px;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  media ${(props) => props.theme.device.desktop},
  {
    padding: 0px 276px;
  }
  
  media ${(props) => props.theme.device.tablet},
  {
    padding: 0px 36px;
  }
  
  @media ${(props) => props.theme.device.mobile},
  {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

const NameCard = styled.div`
  display: flex;
  @media ${(props) => props.theme.device.mobile},
  {
    flex-direction: column;
  }
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.device.desktop},
  {
    gap: 12px;
  }
`;

const JobTitle = styled.div`
  font-family: Inter;
  font-weight: 700;
  line-height: 150%;
  color: white;

  padding: 12px 16px;
  width: fit-content;
  align-items: center;
  gap: 16px;
  border-radius: 16px;
  background: #334155;

  @media ${(props) => props.theme.device.desktop},
  {
    font-size: 28px;
  }

  @media 
  ${(props) => props.theme.device.tablet},
  ${(props) => props.theme.device.mobile},
  {
    font-size: 20px;
  }
  
`;

const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #DA7D4A;
  font-family: Inter;
  font-weight: 700;
  line-height: 150%;
  white-space: nowrap;

  padding: 12px 16px;
  gap: 16px;

  border-radius: 16px;
  border: 1px solid #FFF;
  background: rgba(255, 255, 255, 0.90);
  box-shadow: 0px 4px 12px 0px rgba(163, 180, 203, 0.20);
  
  @media ${(props) => props.theme.device.desktop},
  {
    font-size: 40px;
  }
  
  @media
  ${(props) => props.theme.device.tablet},
  ${(props) => props.theme.device.mobile}, 
  {
    font-size: 28px;
  }

  `;

const NumLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: var(--default-white, #FFF);
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;

  font-weight: 1200;
  line-height: 150%; 

  border-radius: 100%;
  background: var(--Gradient, linear-gradient(90deg, #E5793B 1.54%, #FF4185 97.86%));
  
  @media 
  ${(props) => props.theme.device.mobile},
  ${(props) => props.theme.device.tablet},
  {
    font-size: 25px;
    width: 39px;
    height: 39px;
  }

  @media ${(props) => props.theme.device.desktop},
  {
    font-size: 32px;
    width: 50px;
    height: 50px;
  }
`;

const AvatarContainer = styled.div`
  position: relative;
`;

const Avatar = styled.img`
  @media ${(props) => props.theme.device.tablet},
  {
    width: 343px;
    height: 255px;
  }
  @media ${(props) => props.theme.device.mobile},
  {
    width: 343px;
    overflow-clip-margin: content-box;
    overflow: clip;
    height: 255px;
  }
  @media ${(props) => props.theme.device.desktop},
  {
    width: 723px;
    height: 537px;
  }
`;

const FloatingSM = styled.div`
  display: flex;
  padding: var(--spacer-8, 8px) var(--spacer-40, 40px);
  justify-content: center;
  align-items: center;
  gap: 16px;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 21px;
  border-radius: var(--spacer-12, 12px);
  background: #FFF;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.10);
  
  @media ${(props) => props.theme.device.mobile},
  {
    display: flex;
  }
  @media 
  ${(props) => props.theme.device.tablet},
  ${(props) => props.theme.device.desktop},
  {
    display: none;
  }
`;

const SocialLogo = styled.img`
    display: flex;
    padding: 2px;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
`;

const HeroSection = () => {
  return (
    <Container>
      <Slogan>台灣的明天{'\n'}喵先鋪路</Slogan>
      <NameCard>
        <JobTitle>2024 立委參選人</JobTitle>
        <Name>
          <NumLogo>3</NumLogo>
          <div>喵立翰 Miao Li-Han</div>
        </Name>
      </NameCard>
      <AvatarContainer>
        <Avatar src={avatar_ori} />
        <FloatingSM>
          <SocialLogo src={fbLogoPath} />
          <SocialLogo src={igLogoPath} />
          <SocialLogo src={ytLogoPath} />
        </FloatingSM>
      </AvatarContainer>
    </Container>
  );
};
export default HeroSection;
