import React from 'react';
import styled from 'styled-components';

import LogoPath from '../assets/logo.svg';
import fbLogoPath from '../assets/fblogo.svg';
import igLogoPath from '../assets/instalogo.svg';
import ytLogoPath from '../assets/ytlogo.svg';

import { profile } from '../config/profile';
import { anchorId } from '../config/anchor';

const Outerbox = styled.div`
    position: sticky;
    top: 0px;
    z-index: 10;
    width: 100vw;
    box-sizing: border-box;
    overflow-x: hidden;
    background-color: transparent;
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
    background: rgba(255, 255, 255, 0.90);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: stretch;
    align-items: center;
    padding: 12px 24px;
    border-radius: 16px;
    backdrop-filter: blur(4px);
    background: rgba(255, 255, 255, 0.90);
    @media
    ${(props) => props.theme.device.desktop},
    ${(props) => props.theme.device.tablet},
    {

    }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  img {
    width: 52.169px;
    height: 43px;
    object-fit: cover;
  }
  .logo__title {
    color: var(--primary, #DA7D4A);
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 36px */
  }
  &:hover {
    opacity: 0.8;
  }
  @media ${props => props.theme.device.tablet} {
    gap: 4px;
    img {
      width: 34px;
      height: 28px;
    }
    .logo__title {
      font-size: 20px;
    }
  }
`;

const SocialLogo = styled.img`
  display: flex;
  padding: 2px;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  object-fit: contain;
  &:hover {
    opacity: 0.8;
  }
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
    <Outerbox>
      <Innerbox>
        <Logo href={`#${anchorId.hero}`}>
          <img alt="logo" src={LogoPath} />
          <div className="logo__title">{profile.candidateName}</div>
        </Logo>
        <Middy>
          <MidContent><a href={`#${anchorId.advocate}`}>候選人主張</a></MidContent>
          <MidContent><a href={`#${anchorId.latestEvents}`}>最新活動</a></MidContent>
          <MidContent><a href={`#${anchorId.policyIssues}`}>政策議題</a></MidContent>
          <MidContent><a href={`#${anchorId.service}`}>小額捐款</a></MidContent>
          <MidContent><a href={`#${anchorId.service}`}>民眾服務信箱</a></MidContent>
        </Middy>
        <Righty>
          <SocialLogo alt="fb" src={fbLogoPath} />
          <SocialLogo alt="ig" src={igLogoPath} />
          <SocialLogo alt="yt" src={ytLogoPath} />
        </Righty>
      </Innerbox>
    </Outerbox>
  );
};
export default NavigationBar;
