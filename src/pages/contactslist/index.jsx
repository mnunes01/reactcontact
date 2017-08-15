import React from 'react'
import { Link } from 'react-router-dom'
// import ContactsStore from "../../stores/contactstore";
import ContactsStore from '../../stores/contactstore'
import * as ContactsActions from '../../actions/contactsactions'

export default class contactList extends React.Component {
  constructor () {
    super()
    this.getContactcs = this.getContactcs.bind(this)
    this.state = {
      contacts: ContactsStore.getAll()
    }
  }
  componentWillMount () {
    ContactsStore.on('change', this.getContactcs)
  }
  componentWillUnmount () {
        // unbind listeners to prevent memory leaks
    ContactsStore.removeListener('change', this.getContacts)
  }

  getContactcs () {
    this.setState({contacts: ContactsStore.getAll()}, console.log(this.state))
  }
  deleteContact (id) {
    ContactsActions.deleteContact(id)
  }

  render () {
    const ContactComponents = this.state.contacts.map((contact) => {
      let {id, firstName} = contact
      return (

        <li key={id}>
          <Link to={'/details/' + id}> {firstName}</Link>
          <button onClick={this.deleteContact.bind(this, id)}>Delete</button>
          <Link to={'/details/' + id}> Edit</Link>

        </li>)
    })
    return (
      <div>
        {ContactComponents}
      </div>
    )
  }
};
