import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Auth.module.css';
import * as actions from '../../store/actions/index';

class ChangePw extends Component {
  state = {
    controls: {
      oldPassword: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Old Password',
          name: 'old_password',
          value: ''
        },
        validation: {
          required: true,
          minLength: 5
        },
        valid: false,
        touched: false
      },
      newPw: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'New Password',
          name: 'new_password',
          value: '',
        },
        validation: {
          required: true,
          minLength: 5
        },
        valid: false,
        touched: false
      },
      confirmNewPw: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Confirm New Password',
          name: 'new_password_confirmation',
          value: ''
        },
        validation: {
          required: true,
          minLength: 5
        },
        valid: false,
        touched: false
      }
    }
  }

  checkValidity(value, rules) {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        elementConfig: {
          ...this.state.controls[controlName].elementConfig,
          value: event.target.value
        },
        valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
        touched: true
      }
    };
    this.setState({ controls: updatedControls });
  }

  submitHandler = (event) => {
    event.preventDefault();
    console.log(
      this.state.controls.password.elementConfig.value,
      this.state.controls.newPw.elementConfig.value,
      this.state.controls.confirmNewPw.elementConfig.value
    );
    
    const data = {
      old: this.state.controls.password.elementConfig.value,
      new: this.state.controls.newPw.elementConfig.value,
      confirmNew: this.state.controls.confirmNewPw.elementConfig.value,
      token: this.props.token
    };
    console.log(data);
    this.props.onChangePw(data);
  }

  render() {

    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      })
    }

    let form = formElementsArray.map(formElement => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.elementConfig.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={(event) => this.inputChangedHandler(event, formElement.id)}
      />
    ));

    if (this.props.loading) {
      form = <Spinner />
    }

    let errorMessage = null;

    if (this.props.error) {
      errorMessage = (
        <p>{this.props.error.message}</p>
      )
    }

    return (
      <div className={classes.Auth}>
        {errorMessage}
        <form onSubmit={this.submitHandler}>
          {form}
          <Button btnType="Success">SUBMIT</Button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangePw: (data) => dispatch(actions.changePw(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePw);