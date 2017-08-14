import React from 'react';
import { Link } from 'react-router-dom';
import * as ContactsActions from "../actions/contactsactions";

export default class Header extends React.Component {
    createDummyContact() {
        ContactsActions.createContact(
                {firstName: "ricardo",
                    lastName: "sousa",
                    email: "rsousa@fff.com",
                    country: "Spain"
                });
    }
    render() {
        return (
                <div>
                    <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode. <br/>@Mario Nunes 08/2017 Hello:<a href="mailto:mnunes01@hotmail.com" target="_blank">mnunes01@hotmail.com</a></small>
                    <form>
                        <input type="hidden" defaultValue={process.env.REACT_APP_SECRET_CODE} />
                    </form>
                </div>
                )
    }
}


