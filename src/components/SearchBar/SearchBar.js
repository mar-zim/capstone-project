import React from 'react'
import styled from 'styled-components'
import deleteIcon from '../../icons/delete.svg'
import PropTypes from 'prop-types'
import cross from '../../icons/cross.svg'
import searchIcon from '../../icons/search.svg'

SearchBar.propTypes = {
  searchInput: PropTypes.string,
  setSearchTerm: PropTypes.func,
  isSearchBarVisible: PropTypes.bool,
  setIsSearchBarVisible: PropTypes.func,
}

export default function SearchBar({
  searchInput,
  setSearchTerm,
  isSearchBarVisible,
  setIsSearchBarVisible,
}) {
  function handleSearch(event) {
    setSearchTerm(event.target.value)
  }

  function viewSearch() {
    setIsSearchBarVisible(true)
  }

  function endSearch() {
    setSearchTerm('')
    setIsSearchBarVisible(false)
  }

  function clearSearchField() {
    setSearchTerm('')
  }

  return (
    <>
      {isSearchBarVisible ? (
        <StyledSearchBar>
          <ToggleIcon src={cross} alt="cross" onClick={endSearch} />
          <StyledSearchForm onSubmit={(event) => event.preventDefault()}>
            <StyledTextField
              type="text"
              placeholder="Wonach suchst du?"
              value={searchInput}
              onChange={handleSearch}
              data-testid="textField"
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
          <ToggleIcon src={searchIcon} alt="searchIcon" onClick={viewSearch} />
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

const ToggleIcon = styled.img`
  height: 35px;
  cursor: pointer;
`
