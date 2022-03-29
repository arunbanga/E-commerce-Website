import {combineReducers} from 'redux'
import Reducer from './Carts/Reducer'
const Rootreducer=combineReducers({
    cart:Reducer,
});

export default Rootreducer;