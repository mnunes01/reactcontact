import React from 'react'
// import ContactsStore from "../../stores/contactstore";
import ContactsStore from '../../stores/contactstore'
import * as ContactsActions from '../../actions/contactsactions'

import ViewContactList from './components/viewcontactlist/'


export default class contactListController extends React.Component {
  constructor () {
    super()
    this._getContactcs = this.getContactcs.bind(this)
    this.state = {
      contacts: ContactsStore.getAll()
    }
    this.getContacts = this.getContactcs.bind(this)   
    this.handleRedirectAction = this.handleRedirect.bind(this)
    this.deleteAction = this.deleteContact.bind(this)
  }
  componentWillMount () {
    ContactsStore.on('change', this.getContacts)
  }
  componentWillUnmount () {    
    // unbind listeners to prevent memory leaks
    ContactsStore.removeListener('change', this.getContacts)
  }
  getContactcs () {
    this.setState({contacts: ContactsStore.getAll()})
  }
  deleteContact (id) { 
    console.log('deleting: ' + id)
    ContactsActions.deleteContact(id)
  }
  handleRedirect(id) {    
    this.props.history.push('/details/edit/'+id)
  }

  render () {    
    const ContactComponents = this.state.contacts.map((contact) => {
      let {id, firstName} = contact
      return (
        <ViewContactList
          key={id}
          id={id}
          firstName={firstName}
          deleteAction={() => this.deleteAction(id)}
          clickAction={() => this.handleRedirectAction(id)}    
        />
        )
    })    
    return (
        <div>
        {ContactComponents}          
        </div>
    )
  }
};