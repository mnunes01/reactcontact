import React from 'react'
import * as ContactsActions from '../../actions/contactsactions'

export default class SettingsController extends React.Component {
  createDummyContact () {
    ContactsActions.createContact(
      {firstName: 'ricardo',
        lastName: 'sousa',
        email: 'rsousa@fff.com',
        country: 'Spain'
      })
  }
  render () {
    return (
      <div>
        <button onClick={this.createDummyContact.bind(this)}>New dummy Contact</button>        
      </div>
    )
  }
}
