import React from 'react';
import styled from 'styled-components';

import LogoPath from '../assets/logo.svg';
import fbLogoPath from '../assets/fblogo.svg';
import igLogoPath from '../assets/instalogo.svg';
import ytLogoPath from '../assets/ytlogo.svg';

const Background = styled.div`
    color: #FDFCFB;
`;
const Outerbox = styled.div`
    background-color: #FDFCFB;
    @media
    ${(props) => props.theme.device.tablet},
    ${(props) => props.theme.device.desktop},
    {
        padding: 16px 24px;
    }
    @media
    ${(props) => props.theme.device.mobile},
    {
        padding: 12px 16px;
    }
`;
const Innerbox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: stretch;
    @media
    ${(props) => props.theme.device.desktop},
    ${(props) => props.theme.device.tablet},
    {
        padding: 12px 24px;
        border-radius: 16px;
        border: 1px solid;
        backdrop-filter: blur(12px);
        background: rgba(255, 255, 255, 0.90);
    }
`;

const Lefty = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-self: start;
    align-items: center;
    gap: 8px;
`;
const Logo = styled.img`
    @media
    ${(props) => props.theme.device.mobile},
    {
        width: 34px;
        height: 28px;
    }
    @media
    ${(props) => props.theme.device.desktop},
    ${(props) => props.theme.device.tablet},
    {
        width: 52px;
        height: 43px;
    }
`;
const Title = styled.div`
    color: #DA7D4A;
    text-align: left;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;

    @media
    ${(props) => props.theme.device.desktop},
    ${(props) => props.theme.device.tablet},
    {
        font-size: 24px;
    }
    @media
    ${(props) => props.theme.device.mobile},
    {
        font-size: 20px;
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

const Righty = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;

    @media
    ${(props) => props.theme.device.tablet},
    {
        display: flex;
    }
    @media
    ${(props) => props.theme.device.mobile},
    {
        display: none;
    }
`;

const Middy = styled.div`
    display: flex;
    gap: 16px;
    padding: 8px;
`;
const MidContent = styled.div`
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    text-align: center;
    color: #334155;

    @media
    ${(props) => props.theme.device.desktop},
    {
        display: flex;
    }
    @media
    ${(props) => props.theme.device.tablet},
    ${(props) => props.theme.device.mobile},
    {
        display: none;
    }
`;

const NavigationBar = () => {
  return (
    <Background>
      <Outerbox>
        <Innerbox>
          <Lefty>
            <Logo src={LogoPath} />
            <Title>喵立翰 Miao Li-Han</Title>
          </Lefty>
          <Middy>
            <MidContent>候選人主張</MidContent>
            <MidContent>最新活動</MidContent>
            <MidContent>政策議題</MidContent>
            <MidContent>小額捐款</MidContent>
            <MidContent>民眾服務信箱</MidContent>
          </Middy>
          <Righty>
            <SocialLogo src={fbLogoPath} />
            <SocialLogo src={igLogoPath} />
            <SocialLogo src={ytLogoPath} />
          </Righty>
        </Innerbox>
      </Outerbox>
    </Background>
  );
};
export default NavigationBar;
