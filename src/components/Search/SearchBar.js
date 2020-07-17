import React from 'react'
import styled from 'styled-components'
import deleteIcon from '../../icons/delete.svg'
import PropTypes from 'prop-types'
import cross from '../../icons/cross.svg'
import searchIcon from '../../icons/search.svg'

SearchBar.propTypes = {
  search: PropTypes.string,
}

export default function SearchBar({
  search,
  isSearchBarVisible,
  viewSearch,
  endSearch,
  clearSearchField,
  handleSearch,
}) {
  console.log(isSearchBarVisible)
  console.log(search)
  return (
    <>
      {isSearchBarVisible ? (
        <StyledSearchBar>
          <StyledIcon src={cross} alt="cross" onClick={endSearch} />
          <StyledSearchForm onSubmit={(event) => event.preventDefault()}>
            <StyledTextField
              type="text"
              placeholder="Wonach suchst du?"
              value={search}
              onChange={handleSearch}
            />
            <DeleteTextIcon
              onClick={clearSearchField}
              src={deleteIcon}
              alt="delete"
            />
          </StyledSearchForm>
        </StyledSearchBar>
      ) : (
        <StyledSearchBar>
          <StyledIcon src={searchIcon} alt="searchIcon" onClick={viewSearch} />
        </StyledSearchBar>
      )}
    </>
  )
}

const StyledSearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  padding: 10px 0;
`

const StyledSearchForm = styled.form`
  position: relative;
  height: 35px;
  width: 90%;
  border-radius: 5px;
  border: 1px solid var(--grey-5);
`
const StyledTextField = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 20%;
  font-family: var(--fontbody);
  font-size: 14px;
  &:focus {
    outline: none;
    border: 2px solid var(--lightblue);
  }
`
const DeleteTextIcon = styled.img`
  height: 50%;
  top: 25%;
  position: absolute;
  right: 10px;
  cursor: pointer;
`

const StyledIcon = styled.img`
  height: 35px;
  cursor: pointer;
`
