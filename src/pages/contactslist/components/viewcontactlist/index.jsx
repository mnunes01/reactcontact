import React from 'react'
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import FaceIcon from 'material-ui-icons/Face';

export default class viewcontactList extends React.Component {
  render () {              
    return (
     <div className='row'>                
        <Chip className='chip'
              avatar={
               <Avatar>
                 <FaceIcon/>
               </Avatar>
              }
              label={this.props.firstName}
              key={this.props.id}             
              onClick={this.props.clickAction}
              onRequestDelete={this.props.deleteAction}              
            />                
      </div>                 
    )
    }
  }