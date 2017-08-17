import React from 'react'
import * as ContactsActions from '../../actions/contactsactions'
import ContactsStore from '../../stores/contactstore'

export default class SettingsController extends React.Component {
  constructor () {
    super()
    this.createDummyContatc = this.createDummyContact.bind(this)
    this.logCollection = this.logCollection.bind(this)
    this.clearCollection = this.clearCollection.bind(this)
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
  logCollection () {
    console.log(ContactsStore.getAll())
  }
  clearCollection () {
    ContactsStore.removeData()
  }

  render () {
    return (
      <div className='settings'>
        <div>
          <label>
            Create Dummy Data: <button onClick={this.createDummyContatc}>New Contact</button>
          </label>
        </div>
        <div>
          <label>
            Console log stored collection: <button onClick={this.logCollection}>Log collection</button>
          </label>
        </div>
        <div>
          <label>
            Clear collection: <button onClick={this.clearCollection}>Clear collection</button>
          </label>
        </div>
      </div>
    )
  }
}
