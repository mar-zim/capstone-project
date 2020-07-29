import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

TextInputField.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  value: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
  width: PropTypes.number,
}

export default function TextInputField({
  placeholder,
  name,
  type,
  handleChange,
  value,
  required,
  error,
  width,
}) {
  return (
    <StyledTextInputField>
      <StyledInput
        name={name}
        type={type}
        onChange={handleChange}
        value={value}
        required={required}
        placeholder={placeholder}
        width={width}
      />
      {error && <StyledError>{error}</StyledError>}
    </StyledTextInputField>
  )
}

const StyledTextInputField = styled.div`
  position: relative;
  margin: 5px 0 25px 0;
`

const StyledInput = styled.input`
  outline: none;
  border: none;
  background: var(--white);
  padding: 0 5px;
  margin-top: 5px;
  border-bottom: 1px solid var(--grey-4);
  width: ${(props) => props.width || 50}%;
  font-family: var(--fontbody);
  font-size: 14px;
  ::placeholder {
    color: var(--grey-3);
    font-size: 12px;
  }
  &:focus {
    outline: none;
    border-bottom: 1px solid var(--denim);
  }
`

const StyledError = styled.div`
  position: absolute;
  color: var(--salmon-pink);
  font-size: 10px;
  margin: 0;
`
