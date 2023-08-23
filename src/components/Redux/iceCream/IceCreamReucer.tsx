import { BUY_ICECREAM } from "./IceCreamTypes"

console.log('b ice');

const initialState = {
    numberOfIceCreams: 15
}

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numberOfIceCreams: state.numberOfIceCreams - 1
        }
        default: return state
    }
}

export default iceCreamReducer;