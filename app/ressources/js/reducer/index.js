import {combineReducers} from 'redux'
import ProductReducer from './reducer-products-db'
import ActiveProductReducer from './reducer-active-product'
import ActiveRequestReducer from './reducer-active-request'
import RequestReducer from './reducer-requests-db'

const allReducers = combineReducers({
	products : ProductReducer,
	activeProduct : ActiveProductReducer,
	activeRequest : ActiveRequestReducer,
	requests :RequestReducer
})
export default allReducers
