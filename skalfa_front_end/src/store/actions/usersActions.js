import {push} from 'connected-react-router';
import axios from '../../axios-api';

export const REGISTER_USER_SUCCESS = 'REGISTER_USER _SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER _FAILURE';

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const LOGOUT_USER = 'LOGOUT_USER';

export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

const registerUserSuccess = user => ({type: REGISTER_USER_SUCCESS, user});
const registerUserFailure = error => ({type: REGISTER_USER_FAILURE, error});
const loginUserSuccess = user => ({type: LOGIN_USER_SUCCESS, user});
const loginUserFailure = error => ({type: LOGIN_USER_FAILURE, error});
const getUsersSuccess = users => ({type: GET_USERS_SUCCESS, users});
const getUsersFailure = error => ({type: GET_USERS_FAILURE, error});

export const logoutUser = () => {
    return (dispatch, getState) => {
        const token = getState().users.user.token;
        const config = {headers: {'Authorization': token}};
        return axios.delete('/users/sessions', config).then(() => {dispatch({type: LOGOUT_USER});
            },
            error => {
                if (error.response) {
                    dispatch(registerUserFailure(error.response.data));
                } else {
                    dispatch(registerUserFailure({global: "No network connection "}))
                }
            }

        )
    }
};

export const registerUser = userData => {
    return dispatch => {
        console.log(userData);
        return axios.post('/users', userData).then(response => {
                dispatch(registerUserSuccess(response.data.user));
                dispatch(push('/users_list'));
            },
            error => {
                if (error.response) {
                    console.log(error.response.data);
                    dispatch(registerUserFailure(error.response.data));
                } else {
                    dispatch(registerUserFailure({global: "No network connection "}))
                }
            }
        )
    }
};

export const loginUser = userData => {
    return dispatch => {
        return axios.post('/users/sessions', userData).then(response => {
                dispatch(loginUserSuccess(response.data.user));
                dispatch(push('/users_list'));
            },
            error => {
                if (error.response) {
                    dispatch(loginUserFailure(error.response.data));
                } else {
                    dispatch(loginUserFailure({global: "No network connection "}))
                }
            }
        )
    }
};

export const getUsers = () => {
    return (dispatch, getState) => {
        const token = getState().users.user.token;
        const config = {headers: {'Authorization': token}};
        return axios.get('/users', config).then(response => {
                dispatch(getUsersSuccess(response.data));
            },
            error => {
                if (error.response) {
                    dispatch(getUsersFailure(error.response.data));
                } else {
                    dispatch(getUsersFailure({global: "No network connection "}))
                }
            }
        )
    }
};