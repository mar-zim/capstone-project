import { text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import ContactDetails from './ContactDetails'

export default {
  component: ContactDetails,
  title: 'ContactDetails',
  decorators: [withKnobs],
}

export const withExampleData = () => (
  <ContactDetails
    firstname="Johanna"
    location=" Harburg"
    phone="097 37222937"
    details="Ich wohne im 5. Stock ohne Aufzug."
  />
)

export const withVariableData = () => (
  <ContactDetails
    firstname={text('First Name', 'Name')}
    location={text('Location', 'Ort')}
    phone={text('Phone Number', '0000 00000000000')}
    details={text(
      'Details',
      'Add description about your location or time to reach you'
    )}
  />
)
