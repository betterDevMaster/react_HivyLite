import React, {Component} from 'react'
import ReactDOM from "react-dom"
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {takeProduct, takeRequest} from '../action/index'
class ProductList extends Component{

	constructor(props, context) {
		super(props, context);

		this.state = {
			productsList : [],
			requestsList : []
		};
	}
	
	
	change(evt){

		let searchRequest = evt.target.value;
		// let products = this.props.products
		let requestList = []
		let list = []
		this.props.requests.then((requests)=>{
			
		
			for (let request of requests){

			 	if(request.name.includes(searchRequest)&& searchRequest !== ''){
		
					requestList.push([React.createElement("li",{className: "request", key:request.id, onClick:()=>{this.props.takeRequest(request)}},request.name)])
				}
				if( searchRequest === '/*' ){
					requestList.push([React.createElement("li",{className: "request", key:request.id, onClick:()=>{this.props.takeRequest(request)}},request.name)])
				}
				
			}
			this.setState({requestsList:requestList})
		});
		this.props.products.then((products)=>{
			


			for (let product of products){

				if(product.name.includes(searchRequest) && searchRequest !== '' ){
					for(let i=0; i<product.form.length; i++){
					// console.log(product.form[i].props)
						if(product.form[i].props !== undefined  ){
							if(product.form[i].props.children !== undefined){

								for(let j =0; j<product.form[i].props.children.length; j++ ){
									if(product.form[i].props.children[j].type !== undefined){
										product.form[i].props.children[j] =  [React.createElement(product.form[i].props.children[j].type, product.form[i].props.children[j].props)]
									}
								
								}
							}

							product.form[i] = [React.createElement(product.form[i].type, product.form[i].props)]
						}

					}
			
					list.push(React.createElement("li",{className: "product", key:product.id, onClick:()=>{this.props.takeProduct(product)}},product.name,React.createElement("img",{className: "product-img", key:product.id+1, src:product.thumbnail})))
						
				}
				if( searchRequest === '/*' ){
					for(let i=0; i<product.form.length; i++){
					// console.log(product.form[i].props)
						if(product.form[i].props !== undefined  ){
							if(product.form[i].props.children !== undefined){

								for(let j =0; j<product.form[i].props.children.length; j++ ){
									if(product.form[i].props.children[j].type !== undefined){
						
										product.form[i].props.children[j] =  [React.createElement(product.form[i].props.children[j].type, product.form[i].props.children[j].props)]
									}
								
								}
							}
							product.form[i] = [React.createElement(product.form[i].type, product.form[i].props)]
						}

					}
					list.push(React.createElement("li",{className: "product", key:product.id, onClick:()=>{this.props.takeProduct(product)}},product.name,React.createElement("img",{className: "product-img", key:product.id+1, src:product.thumbnail})))
				}
				
				
				

			}
			
			this.setState({productsList:list})
		});
		
	}
	
	render() {
			if(this.state.requestsList.length >0){

				return(

					<div>
						<input onChange={(evt)=>this.change(evt)} className="form-input" id="product-name" name="product_name" required="true" type="text" placeholder="products"
						/>
						<ul id="request-list">
							
							<h2>
								already requested:
							</h2>
							{this.state.requestsList}
						</ul>
						<br />
						<ul id="product-list">
							{this.state.productsList}
							
							
							
						</ul>
						
					</div>
				)
			}
			else{

				return(

					<div>
						<input onChange={(evt)=>this.change(evt)} className="form-input" id="product-name" name="product_name" required="true"  type="text" placeholder="products"
						/>
					
						<br />
						<ul id="product-list">
							{this.state.productsList}
							
							
						</ul>
						
					</div>
					
					
				)
			}
		
	}
}
function mapStateToProps(state){
	return {
		products : state.products,
		requests : state.requests
	}
}
function matchDisptachProps(dispatch){
	return bindActionCreators({takeProduct : takeProduct, takeRequest : takeRequest}, dispatch)
}

export default connect(mapStateToProps, matchDisptachProps)(ProductList)