import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import ContactList from './contactslist/'
// import ContactDetailsRouter from '../containers/contactdetails/contactdetailsrouter'
import ContactDetailsRouter from './contactform/'
import ErrorPage from './404'

export default class Main extends React.Component {
  render () {
    return (
      <div>
        <Route path='/' component={ContactList} />
        <Switch>
          <Route exact path='/details/:id' component={ContactDetailsRouter} />
          <Route path='/newcontact/:id' component={ContactDetailsRouter} />
          <Route path='/404' component={ErrorPage} />
          <Redirect to='/404' />
        </Switch>
      </div>
    )
  }
}
