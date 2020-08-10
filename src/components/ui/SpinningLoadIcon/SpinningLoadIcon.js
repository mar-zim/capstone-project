import React from 'react'
import styled from 'styled-components'
import loading from '../../../icons/loading.svg'

export default function SpinningLogoIcon() {
  return (
    <StyledLoading>
      <img src={loading} alt="loading" />
    </StyledLoading>
  )
}

const StyledLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  img {
    width: 60px;
    animation: loading-spin infinite 3s linear;
    @keyframes loading-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`
