import React from 'react';
import ContactDetails from './contactdetails'

export default class ContactDetailsRouter extends React.Component {
    constructor() {
        super();
        this.state = {
            keyValue: 0
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({keyValue: Math.random()})
    }
    handleRedirectAfterDeleteContact() {
        this.props.history.push("/");
    }
    render() {
        return (
                <ContactDetails          
                    key={this.state.keyValue}
                    action={this.props.match.params.id}
                    deleteaction={this.handleRedirectAfterDeleteContact.bind(this)}        
                />
                )
    }
}


