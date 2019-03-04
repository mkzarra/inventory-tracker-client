import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './ItemForm.module.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import * as actions from '../../../store/actions/index';

class ItemForm extends Component {
  state = {
    controls: {
      name: {
        label: "name",
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'avocado',
          name: 'name',
          value: ''
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      storage: {
        label: "storage",
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'counter',
          name: 'storage',
          value: ''
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      expiration: {
        label: 'expiration',
        elementType: 'input',
        elementConfig: {
          type: 'date',
          placeholder: '3-12-2019',
          name: 'expiration',
          value: ''
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      volume: {
        label: 'volume',
        elementType: 'input',
        elementConfig: {
          type: 'number',
          placeholder: '1',
          name: 'volume',
          value: ''
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      unit: {
        label: 'unit',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'whole',
          name: 'unit',
          value: ''
        },
        validation: {
          required: true
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
      isValid = value.length >= rules.minLength && isValid
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
    }
    this.setState({ controls: updatedControls });
  }

  createItemSubmitHandler = (event) => {
    event.preventDefault();
    const data = {
      token: this.props.token,
      item: {}
    }
    for (let controlName in this.state.controls) {
      data.item[controlName] = this.state.controls[controlName].elementConfig.value
    }
    console.log(data);
    this.props.onCreateItem(data);
  }

  render() {

    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      });
    }
    
    let form = <Spinner /> 

    if (!this.props.loading) {
      form = formElementsArray.map(formElement => (
        <Input
          key={formElement.id}
          label={formElement.config.label}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.elementConfig.value}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          changed={(event) => this.inputChangedHandler(event, formElement.id)}
        />
      ));
    }

    let errorMessage = null;

    if (this.props.error) {
      errorMessage = (
        <p>{this.props.error.message}</p>
      );
    }

    let visibility = classes.ItemForm;
    if (!this.props.visible) {
      visibility = classes.Hidden;
    }

    return (
      <div className={visibility}>
        {errorMessage}
        <form onSubmit={this.createItemSubmitHandler}>
          {form}
          <Button btnType="Success">Save</Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.item.loading,
    error: state.item.error,
    token: state.auth.token,
    visible: state.item.showForm
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCreateItem: (data) => dispatch(actions.createItem(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);