import { text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import Modal from './Modal'

export default {
  component: Modal,
  title: 'General/ Modal',
  decorators: [withKnobs],
}

export const withShortTextAndNoHeader = () => (
  <Modal modalText="short" modalVisible={true} />
)

export const withLongTextAndHeader = () => (
  <Modal
    modalVisible={true}
    modalText="This is a rather long text, that be included in a modal. It can be as long as you want it to be."
    modalHeader="A long modal header, that can contain a lot of information."
  />
)

export const withoutText = () => <Modal modalVisible={true} />

export const withVariableTextAndHeader = () => (
  <Modal
    modalVisible={true}
    modalHeader={text('Modal header', 'enter modal header here')}
    modalText={text('Modal text', 'enter modal text here')}
  />
)
