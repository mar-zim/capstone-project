import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'
import Button from '../Button/Button'

Modal.propTypes = {
  modalText: PropTypes.string,
  modalHeader: PropTypes.string,
  modalVisible: PropTypes.bool,
  setModalVisible: PropTypes.func,
  onCloseModalGoToPath: PropTypes.string,
}

export default function Modal({
  modalText,
  modalHeader,
  modalVisible,
  setModalVisible,
  onCloseModalGoToPath,
}) {
  const history = useHistory()
  const transitions = useTransition(modalVisible, null, {
    from: { opacity: 0, transform: 'translateY(-10px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(-10px)' },
  })
  return (
    <>
      {transitions.map(
        ({ item, key, props: style }) =>
          item && (
            <ModalOverlay key={key} style={style}>
              <StyledModal style={style}>
                <h3>{modalHeader}</h3>
                <div>{modalText}</div>
                <Button onClick={closeModal} text="OK"></Button>
              </StyledModal>
            </ModalOverlay>
          )
      )}
    </>
  )
  function closeModal() {
    setModalVisible(false)
    history.push(onCloseModalGoToPath)
  }
}

const StyledModal = styled(animated.div)`
  width: 80vw;
  min-height: 20vh;
  border-radius: 5px;
  box-shadow: 1px 2px 9px 0 var(--grey-2);
  background-color: var(--white);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
