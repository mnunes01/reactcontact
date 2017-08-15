import React from 'react'
import ContactDetails from './components/viewcontactdetails'
import CountryList from 'country-list'

import ContactsStore from '../../stores/contactstore'
import * as ContactsActions from '../../actions/contactsactions'

const COUNTRY_LIST = CountryList().getNames().map((val) => {
  return {name: val, value: val}
})
export default class ContactDetailsRouter extends React.Component {
  constructor () {
    super()
    this.state = {
      keyValue: 0,
      action: undefined,
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      country: undefined,
      operationMsg: null
    }
    this.saveMsg = this.saveMsg.bind(this)
    this.updateId = this.handleUpdateId.bind(this)
    this.closeDetails = this.handleRedirectAfterDeleteContact.bind(this)
  }
  componentWillMount () {
    this.setState({action: this.props.match.params.id})
    this.setUserDetails(this.props)
    ContactsStore.on('saved', this.saveMsg)
    ContactsStore.on('newid', this.updateId)
    ContactsStore.on('contactdeleted', this.closeDetails)
  }
  componentWillUnmount () {
    ContactsStore.removeListener('save', this.saveMsg)
    ContactsStore.removeListener('newid', this.updateId)
    ContactsStore.removeListener('contactdeleted', this.closeDetails)
  }

  componentWillReceiveProps (nextProps) {
    this.setState({keyValue: Math.random(), action: nextProps.match.params.id})
    this.setUserDetails(nextProps)
  }

  setUserDetails (props) {
    if (props.match.params.id === 'new') {
      this.setState({
        id: undefined,
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        country: undefined
      })
    } else {
      this.setState(ContactsStore.getContactById(Number(props.match.params.id)))
    }
  }

  handleSubmit (event) {
    ContactsActions.saveContact({id: this.state.id, firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, country: this.state.country})
    event.preventDefault()
  }
  handleDeleteContact () {
    ContactsActions.deleteContact(this.state.id)
  }
  handleRedirectAfterDeleteContact () {
    this.props.history.push('/')
  }
  handleCountryChange (event) {
    this.setState({
      country: event.value
    })
  }
  handleUpdateId (values) {
    this.setState({id: values.id})
  }
  handleInputChange (event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  saveMsg () {
    this.setState({operationMsg: 'record saved'})
  }

  render () {
    return (
      <ContactDetails
        key={this.state.keyValue}
        action={this.state.action}
        operationMsg={this.state.operationMsg}
        submitAction={this.handleSubmit.bind(this)}
        deleteAction={this.handleDeleteContact.bind(this)}
        countryChange={this.handleCountryChange.bind(this)}
        countryList={COUNTRY_LIST}
        inputChanges={this.handleInputChange.bind(this)}
        fieldsValues={{firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, country: this.state.country}}
                />
    )
  }
}
