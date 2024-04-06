import React from 'react';
import styled from 'styled-components';

import advocate from '../assets/icons/advocate.svg';
import latestEvents from '../assets/icons/latestEvents.svg';
import policyIssues from '../assets/icons/policyIssues.svg';
import smallDonations from '../assets/icons/smallDonations.svg';
import publicServiceInbox from '../assets/icons/publicServiceInbox.svg';

const Container = styled.nav`
  position: sticky;
  position: -webkit-sticky;
  bottom: 0px;
  background: rgba(255, 255, 255, 0.90);
  display: none;
  height: 68px;
  width: 100vw;
  overflow-x: hidden;
  @media ${(props) => props.theme.device.tablet},
  ${(props) => props.theme.device.mobile} {
    display: block;
  }
`;

const Menu = styled.ul`
  width: 100vw;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  img {
    height: 24px;
  }
  a {
    height: 68px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    font-size: 10px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      transform: scale(0.9);
      transition: all 0.2s ease-in-out;
    }
  }
`;

const BottomNavigationBar = () => {
  return (
    <Container>
      <Menu>
        <li>
          <a>
            <img src={advocate} />
            候選人主張
          </a>
        </li>
        <li>
          <a>
            <img src={latestEvents} />
            最新活動
          </a>
        </li>
        <li>
          <a>
            <img src={policyIssues} />
            政策議題
          </a>
        </li>
        <li>
          <a>
            <img src={smallDonations} />
            小額捐款
          </a>
        </li>
        <li>
          <a>
            <img src={publicServiceInbox} />
            民眾服務信箱
          </a>
        </li>
      </Menu>
    </Container>
  );
};

export default BottomNavigationBar;
