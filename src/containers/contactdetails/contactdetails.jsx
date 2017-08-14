import React from 'react';
import CountryList from 'country-list';
import SelectSearch from 'react-select-search';

import ContactsStore from "../../stores/contactstore";
import * as ContactsActions from "../../actions/contactsactions";

//helper class
//import dealWithData from './common/datastore.js';

const COUNTRY_LIST = CountryList().getNames().map((val) => {
    return {name: val, value: val}
});

export default class contactDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: null,
            firstName: undefined,
            lastName: undefined,
            email: undefined,
            country: null
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateId = this.handleUpdateId.bind(this);
        this.saveMsg = this.saveMsg.bind(this);
        this.closeDetails = this.closeDetails.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        this.setUserDetails(nextProps);
    }
    componentWillMount() {
        this.setUserDetails(this.props);
        ContactsStore.on("saved", this.saveMsg);
        ContactsStore.on("newid", this.updateId);
        ContactsStore.on("contactdeleted", this.closeDetails);
    }
    componentWillUnmount() {
        //unbind listeners to prevent memory leaks
        ContactsStore.removeListener("save", this.saveMsg)
        ContactsStore.removeListener("newid", this.updateId);
        ContactsStore.removeListener("contactdeleted", this.closeDetails);
    }
    setUserDetails(nextProps) {
        console.log(nextProps.action)
        if (nextProps.action !== "new") {
            this.setState(ContactsStore.getContactById(Number(nextProps.action)));
        }
    }
    handleSubmit(event) {
        ContactsActions.saveContact(this.state);        
        event.preventDefault();
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleCountryChange(event) {
        this.setState({
            country: event.value
        });
    }
    handleUpdateId(values) {
        this.setState({id: values.id})
    }
    handleDeleteContact() {
        ContactsActions.deleteContact(this.state.id);                
    }
    saveMsg() {
        console.log("record saved");
    }
    closeDetails(){
        this.props.deleteaction();
    }

    render() {
        return (
                <div className="contactDetails">
                    <h1>{this.state.id}</h1>                    
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            First Name:
                            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
                        </label>
                        <label>
                            Last Name:
                            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} />
                        </label>
                        <label>
                            Email:
                            <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
                        </label>
                        <label>
                            <SelectSearch options={COUNTRY_LIST} value={this.state.country} name="country" onChange={this.handleCountryChange} placeholder="Choose your Country" />                    
                        </label>
                        <input type="submit" name="saveContact" value="Save" />
                    </form>
                    {this.props.action !== "new" ? <button onClick={this.handleDeleteContact.bind(this)}>Delete</button> : ""}
                     
                
                </div>
                );
    }
};


