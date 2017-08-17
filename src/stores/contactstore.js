import {EventEmitter} from 'events'
import dispatcher from '../dispatcher'
import _ from 'lodash'

class ContactsStore extends EventEmitter {
  constructor () {
    super()
    this.itemName = 'Contacts' // name of the collection on localstorage
    this.contacts = this.getData() // holds the local mutable collection
  }

  // local storage functions
  getData () { // retrieve data from localstorage
    return JSON.parse(window.localStorage.getItem(this.itemName)) || []
  }
  setData () { // used on save and create
    window.localStorage.setItem(this.itemName, JSON.stringify(this.contacts))
  }
  removeData () { // not in use, todo: implement settings view and enable option to clean all localstorage
    window.localStorage.removeItem(this.itemName)
  }

    // temp object functions
  createContact (val) { // create a new contact, using date.now as unique id, stores on to local collection a localstorage
    const id = Date.now()
    this.contacts.push({
      id,
      firstName: val.firstName,
      lastName: val.lastName,
      email: val.email,
      country: val.country
    })
    this.setData()
    this.emit('change')
    this.emit('newid', {id})
  }
  saveContact (val) { // update contact if id is not null or create a new contact otherwise to local collection a localstorage
    if (val.values.id === null || val.values.id === undefined) {
      this.createContact(val.values)
    } else {
      var index = _.findIndex(this.contacts, {id: val.values.id})
      this.contacts.splice(index, 1, val.values)
      this.setData()
    }
    this.emit('change')
    this.emit('saved')
  }
  deleteContact (id) { // deletes a contact by id -- todo: implement id check and error control
    this.contacts.splice(_.indexOf(this.contacts, _.find(this.contacts, {id: id})), 1)
    this.setData()
    this.emit('change')
    this.emit('contactdeleted')
  }
  getAll () { // returns the local collection of contacts
    return this.contacts
  }
  getContactById (id) { // returns id or undefined
    return _.find(this.contacts, {id: id})
  }

    // action handler routing
  handleActions (action) {
    switch (action.type) {
      case 'CREATE_CONTACT': // used directly only for test porpouse, todo: remove action, createcontac mode is private to this class. Is being used directly by settings to creat dummy contacts data.
        {
          this.createContact(action.values)
          break
        }
      case 'DELETE_CONTACT': // deletes contact
        {
          this.deleteContact(action.id)
          break
        }
      case 'SAVE_CONTACT': // create new or updates a existing contact
        {
          this.saveContact(action)
          break
        }
      default:
        {
          break
        }
    }
  }
}
const contactStore = new ContactsStore()
dispatcher.register(contactStore.handleActions.bind(contactStore))
export default contactStore
