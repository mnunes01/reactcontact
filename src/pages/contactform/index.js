import React from 'react'
import ContactDetails from './components/viewcontactdetails'
import CountryList from 'country-list'

import ContactsStore from '../../stores/contactstore'
import * as ContactsActions from '../../actions/contactsactions'

import Validator from 'validator'

const COUNTRY_LIST = CountryList().getNames().map((val) => {
  return {label: val, value: val}
})
export default class ContactDetailsController extends React.Component {
  constructor () {
    super()
    this.state = {
      keyValue: 0,
      action: undefined,
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      operationMsg: null,
      firstName_errorMsg: '',
      lastName_errorMsg: '',
      email_errorMsg: '',
      country_errorMsg: '',
      formDisabled: ''
    }

    this.saveMsg = this.saveMsg.bind(this)
    this.updateId = this.handleUpdateId.bind(this)
    this.closeDetails = this.handleRedirectAfterDeleteContact.bind(this)
    this.submitAction = this.handleSubmit.bind(this)
    this.deleteAction = this.handleDeleteContact.bind(this)
    this.closeAction = this.closeAction.bind(this)
    this.countryChange = this.handleCountryChange.bind(this)
    this.inputChanges = this.handleInputChange.bind(this)
  }
  componentWillMount () {
    this.setState({keyValue: Math.random(), action: this.props.match.params.action})
    this.setUserDetails(this.props)
    ContactsStore.on('saved', this.saveMsg)
    ContactsStore.on('newid', this.updateId)
    ContactsStore.on('contactdeleted', this.closeDetails)
  }
  componentWillUnmount () {
    ContactsStore.removeListener('saved', this.saveMsg)
    ContactsStore.removeListener('newid', this.updateId)
    ContactsStore.removeListener('contactdeleted', this.closeDetails)
  }

  componentWillReceiveProps (nextProps) {
    this.setState({keyValue: Math.random(), action: nextProps.match.params.action})
    this.setUserDetails(nextProps)
  }

  setUserDetails (props) {
    if (props.match.params.action === 'new') {
      this.setState({
        id: undefined,
        firstName: '',
        lastName: '',
        email: '',
        country: ''
      })
    } else {
      this.setState(ContactsStore.getContactById(Number(props.match.params.id)))
    }
  }

  validateFormData () {
    let validationResult = true
    let validationMsg = {isValid_firstName: true, isValid_lastName: true, isValid_country: true, isValid_email: true}

    if (Validator.isEmpty(this.state.firstName)) {
      validationResult = false
      this.setState({firstName_errorMsg: 'First Name is empty'})
      validationMsg.isValid_firstName = false
      console.log('fname error')
    } else {
      this.setState({firstName_errorMsg: ''})
    }

    if (Validator.isEmpty(this.state.lastName)) {
      validationResult = false
      this.setState({lastName_errorMsg: 'Last Name is empty'})
      validationMsg.isValid_lastName = false
      console.log('lname error')
    } else {
      this.setState({lastName_errorMsg: ''})
    }

    if (Validator.isEmpty(this.state.country)) {
      validationResult = false
      this.setState({country_errorMsg: 'Please select your Country'})
      validationMsg.isValid_country = false
      console.log('country error')
    } else {
      this.setState({country_errorMsg: ''})
    }

    if (Validator.isEmpty(this.state.email) || !Validator.isEmail(this.state.email)) {
      validationResult = false
      validationMsg.isValid_email = false
      this.setState({email_errorMsg: 'email is empty or not on the correct format'})
      console.log('email error')
    } else {
      this.setState({email_errorMsg: ''})
    }

    return validationResult
  }
  handleSubmit (event) {
    if (this.validateFormData()) {
      this.setState({formDisabled: 'disabled', operationMsg: 'saving...'})
      ContactsActions.saveContact({key: this.state.keyValue, id: this.state.id, firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, country: this.state.country})
    }
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
    this.setState({id: values.id, action: 'edit'})
  }
  handleInputChange (event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }
  closeAction () {
    this.props.history.push('/')
  }
  saveMsg () {
    this.setState({operationMsg: 'record saved', formDisabled: ''})
  }

  render () {
    return (
      <ContactDetails
        key={this.state.keyValue}
        action={this.state.action}
        operationMsg={this.state.operationMsg}
        submitAction={this.submitAction}
        deleteAction={this.deleteAction}
        closeAction={this.closeAction}
        countryChange={this.countryChange}
        countryList={COUNTRY_LIST}
        inputChanges={this.inputChanges}
        formDisabled={this.state.formDisabled}
        showDeleteButton={this.state.action === 'edit'}
        fieldsValues={{id: this.state.id, firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, country: this.state.country}}
        fieldsMsg={{firstNameMsg: this.state.firstName_errorMsg, lastNameMsg: this.state.lastName_errorMsg, emailMsg: this.state.email_errorMsg, countryMsg: this.state.country_errorMsg}}
          />
    )
  }
  }
