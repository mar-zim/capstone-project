import React from 'react'
import { animated } from 'react-spring'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Button from '../Button/Button'

Modal.propTypes = {
  style: PropTypes.object,
  closeModal: PropTypes.func,
  modalText: PropTypes.string,
  modalHeader: PropTypes.string,
}

export default function Modal({ style, closeModal, modalText, modalHeader }) {
  return (
    <ModalBackground style={style}>
      <StyledModal style={style}>
        <h3>{modalHeader}</h3>
        <div>{modalText}</div>
        <Button onClick={closeModal} text="OK"></Button>
      </StyledModal>
    </ModalBackground>
  )
}

const StyledModal = styled(animated.div)`
  width: 80vw;
  min-height: 20vh;
  border: 2px solid var(--salmon-pink);
  border-radius: 5px;
  background: var(--salmon-pink);
  opacity: 0.3;
  color: var(--white);
  padding: 20px;
  position: absolute;
  z-index: 90;
  top: 30vh;
  left: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ModalBackground = styled(animated.div)`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`
