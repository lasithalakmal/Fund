import {legacy_createStore} from 'redux'
import rootReducer from './RootReducer';

const store = legacy_createStore(rootReducer)
store.subscribe(()=>console.log(store.getState()))

export default store;