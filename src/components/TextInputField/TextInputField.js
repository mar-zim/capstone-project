import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

TextInputField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  handleChange: PropTypes.func,
  value: PropTypes.string,
  required: PropTypes.bool,
}

export default function TextInputField({
  label,
  name,
  type,
  handleChange,
  value,
  required,
}) {
  return (
    <div>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        name={name}
        type={type}
        onChange={handleChange}
        value={value}
        required={required}
      />
    </div>
  )
}

const StyledInput = styled.input`
  padding: 0.5em;
  margin: 10px 0;
  border: 1px solid var(--grey-4);
  border-radius: 5px;
  width: 40%;
`

const StyledLabel = styled.label`
  display: block;
  margin: 0;
`
