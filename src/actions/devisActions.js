import * as types from './actionTypes';

export function sendDevisSuccess(token){
    return { type: types.SEND_DEVIS_SUCCESS, token};
}

export function sendDevisError(error) {
  return { error, type: types.SEND_DEVIS_FAILED };
}

export function sendDevis(data) {
  return dispatch =>
    fetch('http://localhost:5000/prices', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-token': localStorage.getItem('token')
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
          response.text().then(data => {
            dispatch(sendDevisSuccess(data));
          });
      } else {
        const error = new Error(response.statusText);
        error.response = response;
        dispatch(sendDevisError(error));
        throw error;
      }
    })
    .catch(error => {  });
}