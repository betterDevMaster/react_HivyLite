import React from 'react'
import ProductList from '../container/product-input.js'
import ProductForm from '../container/product-form.js'
import RequestForm from '../container/request-form.js'
const App = () => (
	<section className="form-container">
		
		<form className ="form-main" action="/addRequest" method="post">
			<label htmlFor="product_name" className="form-label" >What do you need ?

			<ProductList />

			</label>
			<RequestForm />
			<div className="product-form-container">
				
				<ProductForm />
			</div>
			<section className="form-button-container">
				<a href="/" className="cancel-button">Cancel</a>
				<button type="submit" className="clearfix form-button">Create a new request</button>
			</section>
		</form>

	</section>
)
export default App;