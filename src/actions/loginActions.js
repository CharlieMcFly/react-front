import * as types from './actionTypes';

export function loginSuccess(token){
    return { type: types.LOGIN_SUCCESS, token};
}

export function loginError(error) {
  return { error, type: types.LOGGED_FAILED };
}

export function logUser(userData) {
  return dispatch =>
    fetch('http://localhost:5000/login', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: userData.username,
        password: userData.password
      })
    })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
          response.text().then(data => {
            localStorage.setItem('token', data);
            dispatch(loginSuccess(data));
          });
      } else {
        const error = new Error(response.statusText);
        error.response = response;
        dispatch(loginError(error));
        throw error;
      }
    })
    .catch(error => {  });
}