
import { Text } from 'react-native'

const redux = require('redux');
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const INCREMENT_MARKS = 'INCREMENT_MARKS'
const INCREMENT_COINS = 'INCREMENT_COINS'

//Action
function incrementMarks() {
    return {
        type: INCREMENT_MARKS,
        infor: "This will increment the marks"
    }
}

function incrementCoins() {
    return {
        type: INCREMENT_COINS,
        infor: "This will increment the coins"
    }
}

//PrevState
const initialMarksState = {
    marksCount: 0
}

const initialCoinsState = {
    coinsCount: 0
}

const reducerMarks = (state = initialMarksState, action) => {
    switch (action.type) {
        case INCREMENT_MARKS: return {
            ...state,
            marksCount: state.marksCount + 1
        }
        default: return state
    }
}

const reducerCoins = (state = initialCoinsState, action) => {
    switch (action.type) {
        case INCREMENT_COINS: return {
            ...state,
            coinsCount: state.coinsCount + 1
        }
        default: return state
    }
}

export default function CombineReducerEx() {
    const rootReducer = combineReducers({
        marks: reducerMarks,
        coins: reducerCoins,
    })
    const store = createStore(rootReducer, applyMiddleware(logger))
    //console.log('initial state', store.getState())
    const unsubscribe = store.subscribe(() => {})
    store.dispatch(incrementMarks())
    store.dispatch(incrementMarks())
    store.dispatch(incrementCoins())
    console.log(store.getState().marks.marksCount)
    unsubscribe()
    return (
        <Text>Redux</Text>
    );
}