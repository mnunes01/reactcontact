import React from 'react';
import { Link } from 'react-router-dom';
//import ContactsStore from "../../stores/contactstore";
import ContactsStore from "../../stores/contactstore"
import * as ContactsActions from "../../actions/contactsactions";


export default class contactList extends React.Component {
    constructor() {
        super();
        this.getContactcs = this.getContactcs.bind(this);
        this.state = {
            contacts: ContactsStore.getAll(),
        };
    }
    componentWillMount() {
        ContactsStore.on("change", this.getContactcs);
    }
    componentWillUnmount() {
        //unbind listeners to prevent memory leaks
        ContactsStore.removeListener("change", this.getContacts)
    }

    getContactcs() {
        this.setState({contacts: ContactsStore.getAll()}, console.log(this.state));
        //console.log(ContactsStore.getAll());        
    }
    deleteContact(id) {
        ContactsActions.deleteContact(id);
    }           

    render() {
        //const {contacts} = this.state;        
        const ContactComponents = this.state.contacts.map((contact) => {
            return (
                    <li key={contact.id}> 
                        <Link to={'/details/' + contact.id}> {contact.firstName}</Link>
                        <button onClick={this.deleteContact.bind(this, contact.id)}>Delete</button>
                        <Link to={'/details/' + contact.id}> Edit</Link>
                        
                    </li>)
        })
        return (
                <div>                
                    {ContactComponents}                
                </div>
                );
    }
};         