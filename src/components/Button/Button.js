import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  backColor: PropTypes.string,
  disabled: PropTypes.bool,
}

export default function Button({ onClick, text, backColor, disabled }) {
  return (
    <StyledButton
      backgroundColor={backColor}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  )
}

const StyledButton = styled.button`
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
    opacity: 30%;
  }
`
