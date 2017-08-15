import React from 'react'
import { Link } from 'react-router-dom'
import * as ContactsActions from '../../actions/contactsactions'

export default class Header extends React.Component {
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
        <Link to={'/newcontact/new'}> Add Contact</Link>
      </div>
    )
  }
}
