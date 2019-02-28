import axios from 'axios';

import * as actionTypes from './actionTypes';
import apiUrl from '../../server';

export const pantryStart = () => {
  return {
    type: actionTypes.ITEMS_START
  }
}

export const getPantrySuccess = (pantry) => {
  return {
    type: actionTypes.GET_PANTRY_SUCCESS,
    pantry: pantry
  }
}

export const getPantryFail = (error) => {
  return {
    type: actionTypes.GET_PANTRY_FAIL,
    error: error
  }
}

export const addToPantrySuccess = (pantry) => {
  return {
    type: actionTypes.ADD_TO_PANTRY_SUCCESS,
    pantry: pantry
  }
}

export const addToPantryFail = (error) => {
  return {
    type: actionTypes.ADD_TO_PANTRY_FAIL,
    error: error
  }
}

export const removeFromPantrySuccess = (pantry) => {
  return {
    type: actionTypes.REMOVE_FROM_PANTRY_SUCCESS,
    pantry: pantry
  }
}

export const removeFromPantryFail = (error) => {
  return {
    type: actionTypes.REMOVE_FROM_PANTRY_FAIL,
    error: error
  }
}

export const getPantry = (data) => {
  return dispatch => {
    dispatch(pantryStart());
    axios.get(apiUrl + '/pantry', {
      headers: {
        Authorization: 'Bearer ' + data.token
      }
    })
      .then(res => {
        const fetchedItems = [];
        console.log(res.data.items);
        for (let key in res.data.items) {
          fetchedItems.push({
            ...res.data.items[key]
          });
        }
        console.log(fetchedItems);
        dispatch(getItemsSuccess(fetchedItems));
      })
      .catch(err => {
        dispatch(getItemsFail(err));
      });
  }
}

export const addToPantry = (data) => {
  return dispatch => {
    dispatch(pantryStart());
    axios.post(apiUrl + '/pantry', {
      pantryItem: {
        ...data.itemId,
        ...data.userId
      },
      headers: {
        Authorization: 'Bearer ' + data.token
      }
    })
      .then(res => {
        console.log(res.data);
        dispatch(addToPantrySuccess(res.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(addToPantryFail(err));
      });
  }
}

export const removeFromPantry = (data) => {
  return dispatch => {
    dispatch(pantryStart());
    axios.delete(apiUrl + '/pantry' + data.item.id, {
      headers: {
        Authorization: 'Bearer ' + data.user.token
      }
    })
      .then(res => {
        console.log(res.data);
        dispatch(removeFromPantrySuccess(res.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(removeFromPantryFail(err));
      });
  }
}