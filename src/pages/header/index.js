import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {  
  render () {
    return (
      <div className='headerLinks'>        
        <Link to={'/'}> Home</Link>
        <Link to={'/newcontact/new'}> Add Contact</Link>
        <Link to={'/settings/'}> Settings</Link>        
      </div>
    )
  }
}
