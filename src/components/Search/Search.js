import React from 'react'
import styled from 'styled-components'
import deleteIcon from '../../icons/delete.svg'
import PropTypes from 'prop-types'

Search.propTypes = {
  onSearch: PropTypes.func,
  deleteText: PropTypes.func,
  search: PropTypes.string,
}

export default function Search({ onSearch, search, deleteText }) {
  return (
    <StyledSearchForm onSubmit={(event) => event.preventDefault()}>
      <StyledTextField
        type="text"
        placeholder="Wonach suchst du?"
        value={search}
        onChange={onSearch}
      />
      <DeleteIcon onClick={deleteText} src={deleteIcon} alt="delete" />
    </StyledSearchForm>
  )
}
const StyledSearchForm = styled.form`
  margin: 10px 0;
  position: relative;
  height: 30px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid var(--grey-5);
`
const DeleteIcon = styled.img`
  height: 50%;
  top: 25%;
  position: absolute;
  right: 10px;
  cursor: pointer;
`

const StyledTextField = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  border-radius: 5px;
  padding-left: 10px;
  font-family: var(--fontbody);
  &:focus {
    outline: none;
  }
`
