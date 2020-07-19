import PropTypes from 'prop-types'
import React, { useRef, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'
import cross from '../../icons/cross.svg'
import deleteIcon from '../../icons/delete.svg'
import searchIcon from '../../icons/search.svg'

SearchBar.propTypes = {
  searchInput: PropTypes.string,
  setSearchTerm: PropTypes.func,
}

export default function SearchBar({ searchInput, setSearchTerm }) {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false)

  const searchField = useRef()

  const animateWidth = useSpring({
    width: isSearchBarVisible ? '300px' : '0px',
  })

  function handleSearch(event) {
    setSearchTerm(event.target.value)
  }

  function viewSearch() {
    setIsSearchBarVisible(true)
    searchField.current.focus()
  }

  function endSearch() {
    setSearchTerm('')
    setIsSearchBarVisible(false)
  }

  function clearSearchField() {
    setSearchTerm('')
    searchField.current.focus()
  }

  return (
    <StyledSearchBar>
      {isSearchBarVisible ? (
        <ToggleIcon src={cross} alt="cross" onClick={endSearch} />
      ) : (
        <ToggleIcon src={searchIcon} alt="searchIcon" onClick={viewSearch} />
      )}
      <StyledSearchForm
        style={animateWidth}
        onSubmit={(event) => event.preventDefault()}
      >
        <StyledTextField
          ref={searchField}
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
  )
}

const StyledSearchBar = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 10px 0;
`

const StyledSearchForm = styled(animated.form)`
  position: relative;
  margin-left: -10px;
  height: 35px;
  max-width: 90%;
  border-radius: 5px;
  border: 1px solid var(--grey-5);
`
const StyledTextField = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  border-radius: 5px;
  padding-left: 20px;
  padding-right: 20%;
  font-family: var(--fontbody);
  font-size: 14px;
  &:focus {
    outline: none;
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
  z-index: 100;
`
