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
    <ModalOverlay style={style}>
      <StyledModal style={style}>
        <h3>{modalHeader}</h3>
        <div>{modalText}</div>
        <Button onClick={closeModal} text="OK"></Button>
      </StyledModal>
    </ModalOverlay>
  )
}

const StyledModal = styled(animated.div)`
  width: 80vw;
  min-height: 20vh;
  border-radius: 5px;
  box-shadow: 1px 2px 9px 0 var(--grey-2);
  background-color: var(--white);
  color: var(--white);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ModalOverlay = styled(animated.div)`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(176, 174, 172, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`
