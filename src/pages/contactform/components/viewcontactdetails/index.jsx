import React from 'react'
import PropTypes from 'prop-types';
import SelectSearch from 'react-select-search'

export default class contactDetails extends React.Component {      
  render () {
    let {firstName, lastName, email, country} = this.props.fieldsValues     
    
    return (
      <div className='contactDetails'>  
        <small>contact id: {this.props.action} <br/> operations: {this.props.operationMsg}</small>
        <form onSubmit={this.props.submitAction}>
          <label>
                            First Name:
                            <input type='text' name='firstName' value={firstName} onChange={this.props.inputChanges} />
          </label>
          <label>
                            Last Name:
                            <input type='text' name='lastName' value={lastName} onChange={this.props.inputChanges} />
          </label>
          <label>
                            Email:
                            <input type='email' name='email' value={email} onChange={this.props.inputChanges} />
          </label>
          <label>
            <SelectSearch options={this.props.countryList} value={country} name='country' onChange={this.props.countryChange} placeholder='Choose your Country' />
          </label>
          <input type='submit' name='saveContact' value='Save' />
        </form>
        {this.props.action !== 'new' ? <button onClick={this.props.deleteAction}>Delete</button> : ''}

      </div>
    )
  }
};

contactDetails.propTypes = {
  fieldsValues:PropTypes.objectOf(PropTypes.string),
  countryList:PropTypes.array,
  action: PropTypes.string.isRequired,
  operationMsg: PropTypes.string,
  deleteAction: PropTypes.func,
  countryChange: PropTypes.func,
  inputChanges: PropTypes.func,
  submitAction: PropTypes.func
};
