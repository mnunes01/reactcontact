import React from 'react'
import PropTypes from 'prop-types';
import SelectSearch from 'react-select-search'
import Divider from 'material-ui/Divider';

export default class contactDetails extends React.Component {      
  render () {
    let {id, firstName, lastName, email, country} = this.props.fieldsValues     
    let {firstNameMsg, lastNameMsg, emailMsg, countryMsg} = this.props.fieldsMsg 
    
    return (
      <div className='contactDetails'>  
        <small>action: {this.props.action} <br/> contact id: {id} <br/> operationsMessage: {this.props.operationMsg}</small>
        <form onSubmit={this.props.submitAction}>
          <div>            
            <div>
              <label>
                            First Name:                            
                            <input type='text' name='firstName' value={firstName} onChange={this.props.inputChanges} />
              </label>
            </div>
            <div>
              <span>{firstNameMsg}</span>
            </div>
          </div>
          <Divider light />
          
          <div>            
            <div>
              <label>
                            Last Name:
                            <input type='text' name='lastName' value={lastName} onChange={this.props.inputChanges} />
              </label>
            </div>
            <div>
              <span>{lastNameMsg}</span>
            </div>
          </div>
          <Divider light />
          
          <div>            
            <div>
              <label>
                            Email:
                            <input type='email' name='email' value={email} onChange={this.props.inputChanges} />
              </label>
            </div>
            <div>
              <span>{emailMsg}</span>
            </div>
          </div>
          <Divider light />
          
          <div>            
            <div>
              <label>
                <SelectSearch options={this.props.countryList} value={country} name='country' onChange={this.props.countryChange} placeholder='Choose your Country' />
              </label>
            </div>
            <div>
              <span>{countryMsg}</span>
            </div>
          </div>
          <Divider light />
          
          <div>
            <input type='submit' name='saveContact' value='Save' />
            {this.props.showDeleteButton ? <button onClick={this.props.deleteAction}>Delete</button> : ''}
            <button onClick={this.props.closeAction}>Close</button>
          </div>    
          <Divider light />
          
        </form>
      </div>      
    )
  }
};

contactDetails.propTypes = {
  //fieldsValues:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
  showDeleteButton:PropTypes.bool,
  countryList:PropTypes.array,
  action: PropTypes.string.isRequired,
  operationMsg: PropTypes.string,
  deleteAction: PropTypes.func,
  countryChange: PropTypes.func,
  inputChanges: PropTypes.func,
  submitAction: PropTypes.func
};
