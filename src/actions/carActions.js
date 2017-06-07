import * as types from './actionTypes';

export function loadCarsSuccess(cars) {
    return { type: types.LOAD_CARS_SUCCESS, cars };
}

export function loadCarsFailed(cars) {
    return { type: types.LOAD_CARS_FAILED, cars };
}

export function loadCars() {
    return dispatch =>
        fetch('http://localhost:5000/cars', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-token': localStorage.getItem('token')
            }
        })
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    response.text().then(data => {
                        dispatch(loadCarsSuccess(JSON.parse(data)));
                    });
                } else {
                    const error = new Error(response.statusText);
                    error.response = response;
                    dispatch(loadCarsFailed(error));
                    throw error;
                }
            })
            .catch(error => { });
}