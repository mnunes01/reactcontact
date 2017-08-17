import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import ContactListController from './contactslist/'
import ContactDetailsController from './contactform/'
import SettingsController from './settings'
import ErrorPage from './404'

export default class Main extends React.Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={ContactListController} />
          <Route exact path='/details/:action/:id' component={ContactDetailsController} />
          <Route path='/newcontact/:action' component={ContactDetailsController} />
          <Route exact path='/settings/' component={SettingsController} />
          <Route path='/404' component={ErrorPage} />
          <Redirect to='/404' />
        </Switch>
      </div>
    )
  }
}
