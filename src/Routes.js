import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Register from './auth/components/Register.js'
import Login from './auth/components/Login.js'
import Main from './Main.js'

export default props => {
  // global props coming through are sent from App.js
  // routeProps are different - contain location, history objects unique to route components

  return (
    <Switch>
      {/* <Route path="/" exact component="" /> */}
      <Route path="/sign-up" exact component={Register} />
      <Route path="/sign-in" render={routeProps => <Login setLoggedInEmail={props.setLoggedInEmail} getLoggedInEmail={props.getLoggedInEmail} {...routeProps}/>} />
      {/* render method used to pass props to a route component. routeProps are different from the global props coming through to the <Routes /> component. routeProps must be specified if things like history and location need to be accessed
history and location must be passed in this case as the token generated through login will be attached to the history.push() object and pushed through to the /main route on the success of an axios call */}
      <Route path="/main" render={(routeProps) => <Main setViewLinkState={props.setViewLinkState} viewLinkState={props.viewLinkState} {...routeProps}/>} />
    </Switch>
  )
}