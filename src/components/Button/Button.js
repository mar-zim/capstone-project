import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export default function Button({ onClick, text, textcolor, backColor }) {
  return (
    <StyledButton
      backgroundColor={backColor}
      color={textcolor}
      onClick={onClick}
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
  color: ${(props) => props.color || 'var(--white)'};
  cursor: pointer;

  :active {
    position: relative;
    top: 2px;
  }
`
