import { combineReducers } from 'redux'
import cakeReducer from './cake/CakeReucer'
import iceCreamReducer from './iceCream/IceCreamReucer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer
})

export default rootReducer