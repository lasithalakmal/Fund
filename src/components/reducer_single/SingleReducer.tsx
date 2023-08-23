
import { Text } from 'react-native'

const redux = require('redux');
const createStore = redux.createStore

const INCREMENT_COUNT = 'INCREMENT_COUNT'
const DECREMENT_COUNT = 'DECREMENT_COUNT'

//Action
function incrementCount() {
    return {
        type: INCREMENT_COUNT,
        infor: "This will increment the count"
    }
}

function decrementCount() {
    return {
        type: DECREMENT_COUNT,
        infor: "This will decrement the count"
    }
}

//PrevState
const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNT: return {
            ...state,
            count: state.count + 1
        }
        case DECREMENT_COUNT: return {
            ...state,
            count: state.count - 1
        }
        default: return state
    }
}

export default function SingleReducer() {
    const store = createStore(reducer)
    console.log('initial state', store.getState())
    const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))
    store.dispatch(incrementCount())
    store.dispatch(incrementCount())
    store.dispatch(incrementCount())
    unsubscribe()
    return (
        <Text>Redux</Text>
    );
}