import {createStore} from 'redux'
import Rootreducer from '../Redux/Rootreducer'
import {composeWithDevTools} from 'redux-devtools-extension'
const Store=createStore(Rootreducer,composeWithDevTools())
export default Store;