import React from 'react'
import styled from 'styled-components'
import search from '../../icons/search.svg'

export default function SearchField({ searchTerm, handleChange }) {
  return (
    <StyledForm>
      <StyledTextField
        type="text"
        placeholder="Wonach suchst du?"
        value={searchTerm}
        onChange={handleChange}
      />
      <SearchIcon id="icon" src={search} alt="search"></SearchIcon>
    </StyledForm>
  )
}
const StyledForm = styled.form`
  margin: 20px 0;
  position: relative;
  height: 30px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid var(--grey-5);
  transition: all 0.3s;
`
const SearchIcon = styled.img`
  height: 60%;
  top: 20%;
  position: absolute;
  right: 10px;
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
