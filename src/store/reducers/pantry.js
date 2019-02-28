import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  pantry: [],
  loading: false,
  error: null
}

const pantryStart = (state, action) => {
  return updateObject(state, { loading: true });
}

const getPantrySuccess = (state, action) => {
  return updateObject(state, { pantry: action.pantry, loading: false });
}

const getPantryFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
}

const addToPantrySuccess = (state, action) => {
  return updateObject(state, { pantry: action.pantry, loading: false });
}

const addToPantryFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
}

const removeFromPantrySuccess = (state, action) => {
  return updateObject(state, { pantry: action.pantry, loading: false });
}

const removeFromPantryFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PANTRY_START: return pantryStart(state, action);
    case actionTypes.GET_PANTRY_SUCCESS: return getPantrySuccess(state, action);
    case actionTypes.GET_PANTRY_FAIL: return getPantryFail(state, action);
    case actionTypes.ADD_TO_PANTRY_SUCCESS: return addToPantrySuccess(state, action);
    case actionTypes.ADD_TO_PANTRY_FAIL: return addToPantryFail(state, action);
    case actionTypes.REMOVE_FROM_PANTRY_SUCCESS: return removeFromPantrySuccess(state, action);
    case actionTypes.REMOVE_FROM_PANTRY_FAIL: return removeFromPantryFail(state, action);
    default: return state;
  }
}

export default reducer;