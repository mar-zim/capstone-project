import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize'

TextAreaField.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  value: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
}

export default function TextAreaField({
  placeholder,
  name,
  type,
  handleChange,
  value,
  required,
  error,
}) {
  return (
    <StyledTextAreaInputField>
      <StyledTextArea
        name={name}
        type={type}
        onChange={handleChange}
        value={value}
        required={required}
        placeholder={placeholder}
      />
      {error && <StyledError>{error}</StyledError>}
    </StyledTextAreaInputField>
  )
}

const StyledTextAreaInputField = styled.div`
  position: relative;
  margin: 5px 0 25px 0;
`

const StyledTextArea = styled(TextareaAutosize)`
  outline: none;
  border: none;
  background: var(--white);
  padding: 0 5px;
  margin-top: 5px;
  border-bottom: 1px solid var(--grey-4);
  width: 70%;
  min-height: 1.5em;

  font-family: var(--fontbody);
  font-size: 14px;
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
