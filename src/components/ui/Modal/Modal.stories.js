import { text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import Modal from './Modal'

export default {
  component: Modal,
  title: 'General/ Modal',
  decorators: [withKnobs],
}

export const withShortTextAndNoHeader = () => (
  <Modal text="short" modalVisible={true} />
)

export const withLongTextAndHeader = () => (
  <Modal
    modalVisible={true}
    text="This is a rather long text, that be included in a modal. It can be as long as you want it to be."
    header="A long modal header, that can contain a lot of information."
  />
)

export const withoutText = () => <Modal modalVisible={true} />

export const withVariableTextAndHeader = () => (
  <Modal
    modalVisible={true}
    header={text('Modal header', 'enter modal header here')}
    text={text('Modal text', 'enter modal text here')}
  />
)
