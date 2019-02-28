import React from 'react'

import Button from '../UI/Button/Button';
import classes from './Item.module.css'

const item = (props) => {
  let listAction = (
    !props.onList
      ? <div>
          <form onSubmit={props.addToPantry}>
            <input type="hidden" value={props.id} />
            <Button btnType="Success">ADD TO PANTRY</Button>
          </form>
        </div>
      : <div>
          <form onSubmit={props.removeFromPantry}>
            <input type="hidden" value={props.id} />
            <Button btnType="Danger">REMOVE</Button>
          </form>
        </div>
  );
    
  return (
    <div className={classes.Item}>
      <p><strong>{props.itemName}</strong></p>
      <p>Storage: {props.storage}</p>
      <p>Expiration: {props.expiration}</p>
      <p>Volume: {props.volume}</p>
      <p>Unit: {props.unit}</p>
      <p>ID: {props.id}</p>
      {listAction}
      <Button btnType="Button" onClick={props.showUpdateForm}>UPDATE</Button>
    </div>
  );
}

export default item;