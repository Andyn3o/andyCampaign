import React from 'react';
import styled from 'styled-components';
import { GradientText } from '../StyledText';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Tag = styled.h6`
  border-radius: var(--spacer-8, 8px);
  background: var(--text-primary-700, #334155);
  color: #FFF;
  width: fit-content;
  padding: var(--spacer-8, 8px) var(--spacer-12, 12px);
`;

const StyledGradientText = styled(GradientText)`
  font-size: 64px;
  @media ${props => props.theme.device.tablet},
  ${props => props.theme.device.mobile} {
    font-size: 52px;
  }
`;

const SectionTitle = (props) => {
  // eslint-disable-next-line react/prop-types
  const {tag, title, ...otherProps } = props;
  return (
    <Container {...otherProps}>
      <Tag>{tag}</Tag>
      <StyledGradientText>{title}</StyledGradientText>
    </Container>
  );
};
export default SectionTitle;
