import React from 'react';
import { Link } from 'react-router-dom';

import classes from './SuggestAction.module.css';

const suggestAction = (props) => <Link className={classes.SuggestAction} to={props.path} />

export default suggestAction;