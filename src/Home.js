import React from 'react'
import './Home.scss'

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p id="describtion">
            Inventory Tracker shows data to users on how they use a particular food item.<br />
            Discover how often each item is used, thrown away, or out of stock. 
        </p>
      </React.Fragment>
    )
  }
}