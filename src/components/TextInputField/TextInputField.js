import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

TextInputField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  value: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
}

export default function TextInputField({
  label,
  name,
  type,
  handleChange,
  value,
  required,
  error,
}) {
  return (
    <StyledTextInput>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        name={name}
        type={type}
        onChange={handleChange}
        value={value}
        required={required}
      />
      {error && <StyledError>{error}</StyledError>}
    </StyledTextInput>
  )
}

const StyledTextInput = styled.div`
  position: relative;
  margin: 5px 0 25px 0;
`

const StyledInput = styled.input`
  padding: 0.5em;
  margin-top: 5px;
  border: 1px solid var(--grey-4);
  border-radius: 5px;
  width: 40%;
  font-family: var(--fontbody);
  &:focus {
    outline: none;
    border: 1px solid var(--denim);
  }
`

const StyledLabel = styled.label`
  display: block;
  margin: 0;
`

const StyledError = styled.div`
  position: absolute;
  color: var(--salmon-pink);
  font-size: 10px;
  margin: 0;
`
