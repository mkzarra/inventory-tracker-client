import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import classes from './Auth.module.css';
import Button from '../../components/UI/Button/Button';
// import Input from '../../components/UI/Input/Input';

class Logout extends Component {
  logoutSubmitHandler = (event) => {
    event.preventDefault();
    this.props.onLogout(this.props.token);
  }

  render() {
    let signOut = (
      <div className={classes.Logout}>
        <form onSubmit={this.logoutSubmitHandler}>
          <input type="hidden" className="inputLogout" value={this.props.token || ''} />
          <Button btnType="Danger">Click here to sign out</Button>
        </form>
      </div>
    );

    if (!this.props.token) {
      signOut = <Redirect to="/" />
    }
    return (
      <div>
        {signOut}
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: (token) => dispatch(actions.logout(token))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);