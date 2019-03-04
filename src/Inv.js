import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Register from './containers/Auth/Register';
import Login from './containers/Auth/Login';
import Logout from './containers/Auth/Logout';
import Items from './containers/Items/Items';
import Pantry from './containers/Pantry/Pantry';
import Main from './Home';
// import withErrorHandler from './hoc/withErrorHandler/withErrorHandler';

class Inv extends Component {

  render() {

    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/sign-in" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/items" component={Items} />
            <Route path="/pantry" component={Pantry} />
            <Route exact path="/" component={Main} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default Inv;
