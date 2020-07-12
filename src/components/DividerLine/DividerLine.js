import React from 'react'
import styled from 'styled-components'

export default function Dividerline() {
  return <DividerLine />
}

const DividerLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--grey-5);
  margin-top: 20px;
`
