import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  items: [],
  loading: false,
  error: null,
  showForm: false
}

const itemsStart = (state, action) => {
  return updateObject(state, {
    loading: true
  });
}

const getItemsSuccess = (state, action) => {
  return updateObject(state, {
    items: action.items,
    loading: false
  });
}

const getItemsFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
}

const addItemSuccess = (state, action) => {
  return updateObject(state, {
    items: action.items,
    loading: false
  });
}

const addItemFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
}

const removeItemSuccess = (state, action) => {
  return updateObject(state, { items: action.items, loading: false });
}

const removeItemFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
}

const updateItemSuccess = (state, action) => {
  return updateObject(state, { items: action.items, loading: false });
}

const updateItemFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
}

const toggleFormDisplaySuccess = (state, action) => {
  console.log(action.showForm)
  return updateObject(state, { showForm: action.showForm, loading: false });
}

const toggleFormDisplayFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ITEMS_START: return itemsStart(state, action);
    case actionTypes.GET_ITEMS_SUCCESS: return getItemsSuccess(state, action);
    case actionTypes.GET_ITEMS_FAIL: return getItemsFail(state, action);
    case actionTypes.ADD_ITEM_SUCCESS: return addItemSuccess(state, action);
    case actionTypes.ADD_ITEM_FAIL: return addItemFail(state, action);
    case actionTypes.REMOVE_ITEM_SUCCESS: return removeItemSuccess(state, action);
    case actionTypes.REMOVE_ITEM_FAIL: return removeItemFail(state, action);
    case actionTypes.UPDATE_ITEM_SUCCESS: return updateItemSuccess(state, action);
    case actionTypes.UPDATE_ITEM_FAIL: return updateItemFail(state, action);
    case actionTypes.TOGGLE_FORM_DISPLAY_SUCCESS: return toggleFormDisplaySuccess(state, action);
    case actionTypes.TOGGLE_FORM_DISPLAY_FAIL: return toggleFormDisplayFail(state, action);
    default: return state;
  }
}

export default reducer;