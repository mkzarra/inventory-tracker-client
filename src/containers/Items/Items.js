import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import PlusSign from '../../components/UI/PlusSign/PlusSign'
import Item from '../../components/Item/Item';
import ItemForm from './ItemForm/ItemForm';
import Spinner from '../../components/UI/Spinner/Spinner';

class Items extends Component {
  
  componentDidMount() {
    this.props.onGetItems();
  }

  handleAddToPantry = (event, itemId) => {
    event.preventDefault();
    const data = {
      itemId,
      userId: this.props.userId,
      token: this.props.token
    }
    this.props.onAddItemToPantry(data)
  }

  toggleDisplayHandler = () => {
    console.log(this.props.visible);
    this.props.onToggleFormDisplay(this.props.token !== null, !this.props.visible);
  }

  render() {
    let items = <Spinner />;
    if (!this.props.loading && this.props.items === null) {
      items = null;
    }
    console.log(this.props.lists.length)
    // let listId = this.props.lists.length === 0 ? null : this.props.lists[0].id
    if (this.props.items.length > 0 && !this.props.loading) {
      items = this.props.items.map(item => {
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
            addToPantry={(event) => this.handleAddToPantry(event, item._id)}
          />
        );
      });
    }

    if (!this.props.token) {
      items = <Redirect to="/" />;
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
      <div>
        {items}
        {plusSign}
        {itemForm}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.item.items,
    loading: state.item.loading,
    userId: state.auth.userId,
    token: state.auth.token,
    visible: state.item.showForm,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetItems: (data) => dispatch(actions.getItems(data)),
    // onShowItem: (data) => dispatch(actions.showItem(data)),
    onUpdateItem: (data) => dispatch(actions.updateItem(data)),
    onAddItemToPantry: (data) => dispatch(actions.addToPantry(data)),
    onToggleFormDisplay: (token, visible) => dispatch(actions.toggleFormDisplay(token, visible)),
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);