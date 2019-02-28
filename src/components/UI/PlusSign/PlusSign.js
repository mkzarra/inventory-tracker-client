import React from 'react';

import classes from './PlusSign.module.css';

const plusSign = props => {
  console.log('plusSign ' + props.toggleDisplay);
  let showForm = (
    <div className={classes.PlusSign} onClick={props.toggleDisplay}>
      +
    </div>
  );
  if (!props.showForm) {
    showForm = (
      <div className={classes.MinusSign} onClick={props.toggleDisplay}>
        -
      </div>
    );    
  }
  return (
    <div>
      {showForm}
    </div>
  );
}

export default plusSign;