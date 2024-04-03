import React from 'react';
import styled from 'styled-components';

import advocate_avatar from '../assets/advocatephoto.svg';
import advocate_logo from '../assets/advocate.svg';

const Advocate_container = styled.div`
  background: #F7ECE1;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  @media 
  ${(props) => props.theme.device.desktop},
  {
    padding: 0px 300px;
  }
  @media 
  ${(props) => props.theme.device.tablet},
  {
    padding: 0px 36px;
  }
  @media 
  ${(props) => props.theme.device.mobile},
  {
    padding: 0px 16px;
  }
`; 

const Innerbox = styled.div`
  background: #FDFCFB;
  border-radius: 32px;
  display:flex;
  max-width: 1320px;
  width: 100%;

  @media 
  ${(props) => props.theme.device.desktop},
  {
    border-radius: 32px;
    flex-direction: row;
    height: 544px;
    margin-top: 104px;
    margin-bottom: 104px;
  }

  @media 
  ${(props) => props.theme.device.tablet},
  {
    flex-direction: column;
    margin-top: 64px;
    margin-bottom: 64px;
  }
  
  @media 
  ${(props) => props.theme.device.mobile},
  {
    flex-direction: column;
    margin-top: 64px;
    margin-bottom: 64px;
  }

`;

const Avatar = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  @media ${(props) => props.theme.device.tablet},
  {
    border-radius: 0px 0px 32px 32px;

  }
  @media ${(props) => props.theme.device.mobile},
  {
    border-radius: 0px 0px 32px 32px;

  }
  @media ${(props) => props.theme.device.desktop},
  {
    border-radius: 0px 32px 32px 0px;
  }
`;
const Advocate_logo = styled.img`
  width: 114px;
  height: 40px;
`;
const TextBox = styled.div`
  padding: 64px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  @media ${(props) => props.theme.device.desktop},
  {
    min-width: 500px;
  }
  @media ${(props) => props.theme.device.mobile},
  {
    padding: 40px 24px;
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

const SubTitle = styled.div`
  color: #334155;
  font-weight: 700;
    @media 
    ${(props) => props.theme.device.desktop},
    {
        font-size: 28px;
        font-face: Inter;
    }
    @media 
    ${(props) => props.theme.device.tablet},
    {
        font-size: 28px;
        font-face: Inter;
    }
    @media 
    ${(props) => props.theme.device.mobile},
    {
        font-size: 24px;
    }
    .highlight {
        color: #DA7D4A;
    }
`;

const Context = styled.div`
    font-family: Inter;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    text-align: left;
    ${(props) => props.theme.device.mobile},
    {
        font-size: 16px;
        line-height: 24px;
    }
`;
const Advocate = () => {
  return (
    <Advocate_container>
      <Innerbox>
        <TextBox>
          <TitleBox>
            <Advocate_logo src={advocate_logo} />
            <Title>候選人主張</Title>
          </TitleBox>
          <SubTitle>
            我堅信 ! 藉由推動更完善的<span className="highlight">貓咪福利</span>和相關政策，更是間接地投資於<span className="highlight">台灣的未來</span>。
          </SubTitle>
          <Context>
            畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。<br />
            因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
          </Context>
        </TextBox>
        <Avatar src={advocate_avatar} />
      </Innerbox>
    </Advocate_container>
  );
};
export default Advocate;