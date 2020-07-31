import React from 'react'
import { animated } from 'react-spring'
import styled from 'styled-components'

export default function Modal({ style, closeModal }) {
  return (
    <StyledModal style={style}>
      <h3>Modal title</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolores
        molestias praesentium impedit. Facere, perferendis voluptate at, amet
        excepturi ratione mollitia nemo ipsum odit impedit doloremque rerum.
        Quisquam, dolorum at?
      </p>
      <button onClick={closeModal}>Close</button>
    </StyledModal>
  )
}

const StyledModal = styled(animated.div)`
  width: 400px;
  height: 250px;
  color: #fff;
  background: #6929c4;
  padding: 40px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  position: absolute;
  z-index: 90;
  top: calc(50% - 145px);
  left: calc(50% - 220px);
  display: flex;
  flex-direction: column;

  button {
    padding: 16px;
    background-color: #fff;
    color: #6929c4;
    font-size: 1em;
    border: none;
    margin-top: 16px;
    width: 90%;
    align-self: center;
    cursor: pointer;
    transition: background-color 0.1s linear;
    :hover,
    :focus {
      background-color: #e8daff;
    }
  }
`
