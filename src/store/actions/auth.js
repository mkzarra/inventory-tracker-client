import axios from 'axios';

import * as actionTypes from './actionTypes';
import apiUrl from '../../server';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
}

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    userId: userId
  };
}

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
}

export const changePw = (data) => {
  return dispatch => {
    dispatch(authStart());
    axios.patch(apiUrl + '/change-password', {
      passwords: {
        ...data.old,
        ...data.new,
        ...data.confirmNew
      },
      headers: {
        Authorization: 'Bearer ' + data.token
      }
    })
      .then(res => {
        console.log(res);
        dispatch(authSuccess(res.data.user.token, res.data.user.Id))
      })
      .catch(err => {
        console.log(err);
        dispatch(authFail(err));
      });
  }
}

export const logout = (token) => {
  console.log(token);
  return dispatch => {
    dispatch(authStart());
    axios.delete(apiUrl + '/sign-out', {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      .then(res => {
        console.log(res);
        dispatch(authSuccess(null, null));
      })
      .catch(err => {
        console.log(err);
        dispatch(authFail(err));
      });
  }
}

export const register = (data) => {
  return dispatch => {
    dispatch(authStart());
    axios.post(apiUrl + '/sign-up', {
        credentials: data
      })
      .then(res => {
        console.log(res);
        console.log(data);
        dispatch(authSuccess(res.data.user.token, res.data.user.id));
      })
      .catch(err => {
        console.log(err);
        console.log(data);
        dispatch(authFail(err));
      });
  }
}

export const login = (data) => {
  return dispatch => {
    dispatch(authStart());
    axios.post(apiUrl + '/sign-in', {
        credentials: data
      })
      .then(res => {
        console.log(res.data.user);
        console.log(data);
        dispatch(authSuccess(res.data.user.token, res.data.user.id))
      })
      .catch(err => {
        console.log(err);
        dispatch(authFail(err));
      });
  }
}