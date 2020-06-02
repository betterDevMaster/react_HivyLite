import React from 'react';
import ReactDOM from "react-dom"
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import allReducers from './reducer'
import App from './component/app'
const store  = createStore(allReducers)

console.log(App)
ReactDOM.render(
	<Provider store = {store}>
		<App />
	</Provider>
	,document.getElementById('root')
)
