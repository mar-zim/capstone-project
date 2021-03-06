import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  testid: PropTypes.string,
}

export default function Button({
  onClick,
  text,
  backgroundColor,
  disabled,
  type,
  testid,
}) {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      onClick={onClick}
      disabled={disabled}
      type={type}
      data-testid={testid}
    >
      {text}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  margin-right: 10px;
  min-width: 70px;
  min-height: 25px;
  border-radius: 5px;
  border: 0;
  background-color: ${(props) => props.backgroundColor || 'var(--denim)'};
  font-size: 12px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  text-align: center;
  color: var(--white);
  cursor: pointer;

  &:active {
    position: relative;
    top: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 15%;
  }
`
