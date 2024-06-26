import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'; 

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 500px;
  border: 1px solid rgba(255, 255, 255, 0.60);
  background: var(--gray-100, #F1F5F9);
  padding: var(--spacer-16, 16px) var(--spacer-24, 24px);
  cursor: pointer;
  flex-shrink: 0;
  height: fit-content;
  width: fit-content;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.95);
    transition: all 0.2s ease-in-out;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: var(--gray-100, #F1F5F9);
    color: var(--text-primary, #334155);
  }
`;

const Icon = styled.div`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &:empty {
    display: none;
  }
`;

const Button = (props) => {
  const { children, endIcon, ...otherProps } = props;
  return (
    <ButtonContainer {...otherProps}>
      {children}
      <Icon>
        {endIcon}
      </Icon>
    </ButtonContainer>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired, // `node` covers anything that can be rendered: numbers, strings, elements, or an array containing these types.
  endIcon: PropTypes.node, // Not marked as required since `endIcon` is optional
};

export default Button;