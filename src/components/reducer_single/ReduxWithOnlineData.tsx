import axios from "axios";
import { applyMiddleware, legacy_createStore } from 'redux';
//const redux = require('redux');
const createStore = legacy_createStore;
const thunkMiddleware = require('redux-thunk').default

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILUER = 'FETCH_USERS_FAILUER';

const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUserSucess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUserFaiLuer = (error) => {
    return {
        type: FETCH_USERS_FAILUER,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILUER:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
    }
}

const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            const users = response.data.map(user => user.id);
            dispatch(fetchUserSucess(users))
        }).catch(error => {
            dispatch(fetchUserFaiLuer(error.message));
        });
    }
}

export default function ReduxWithOnlineData() {
    const store = createStore(reducer, applyMiddleware(thunkMiddleware));
    store.subscribe(() => { console.log(store.getState()) })
    store.dispatch(fetchUsers());
}