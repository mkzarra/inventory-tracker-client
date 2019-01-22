import React, { Component } from 'react';

import Item from './Item'

class ItemDelete extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  deleteItemHandler = () => {
    
  }
  render() {
    <Item {...props} clicked={this.deleteItemHandler} />
  }
}

export default ItemDelete;