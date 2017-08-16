import React from 'react'
import * as ContactsActions from '../../actions/contactsactions'

export default class SettingsController extends React.Component {
  constructor () {
    super()
    this.clickAction = this.createDummyContact.bind(this)
  }
  createDummyContact () {
    ContactsActions.createContact(
      {
        firstName: 'Mario',
        lastName: 'Nunes',
        email: 'mnunes@fff.com',
        country: 'Portugal'
      })
  }
  render () {
    return (
      <div>
        <button onClick={this.clickAction}>New dummy Contact</button>
      </div>
    )
  }
}
