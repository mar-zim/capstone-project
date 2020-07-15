import React from 'react'

export default function Search({ searchTerm, handleChange }) {
  return (
    <input
      type="text"
      placeholder="Suche"
      value={searchTerm}
      onChange={handleChange}
    />
  )
}
