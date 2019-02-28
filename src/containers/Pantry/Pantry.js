import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import Item from '../../components/Item/Item';
import ItemForm from '../Items/ItemForm/ItemForm';
import Spinner from '../../components/UI/Spinner/Spinner';
import PlusSign from '../../components/UI/PlusSign/PlusSign';

class Pantry extends Component {
  componentDidMount() {
    this.props.getPantry(this.props.token);
  }

  handleRemoveFromPantry = () => {
    
  }

  render() {
    let pantry = <Spinner />

    if (!this.props.loading && this.props.pantry.length === 0) {
      pantry = (
        <>
          <h1><strong>EMPTY</strong></h1>
          <SuggestAction path="/items">Check out our collection!</SuggestAction>
        </>
      );
    }

    if (!this.props.loading && this.props.pantry.length > 0) {
      pantry = this.props.pantry.map(item => {
        return (
          <Item key={item._id}
            itemName={item.name}
            storage={item.storage}
            expiration={item.expiration.slice(0, 10)}
            volume={item.volume}
            unit={item.unit}
            id={item._id}
            token={this.props.token}
            userId={this.props.userId}
            removeFromPantry={this.handleRemoveFromPantry}
          />
        );
      });
    }

    let plusSign = this.props.token
      ? <PlusSign
        showForm={!this.props.visible}
        toggleDisplay={this.toggleDisplayHandler} />
      : null;
    
    let itemForm = this.props.token
      ? <ItemForm visible={this.toggleDisplayHandler} />
      : null;

    return (
      <>
        {pantry}
        {plusSign}
        {itemForm}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    userId: state.auth.userId,
    pantry: state.pantry.pantry,
    loading: state.pantry.loading,
    error: state.pantry.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetPantry: (data) => dispatch(actions.getPantry(data)),
    onAddToPantry: (data) => dispatch(actions.addToPantry(data)),
    onRemoveFromPantry: (data) => dispatch(actions.addToPantry(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pantry);