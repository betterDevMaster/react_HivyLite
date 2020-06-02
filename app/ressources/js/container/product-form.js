import React, {Component} from 'react'
import ReactDOM from "react-dom"

import {connect} from 'react-redux'

class ProductForm extends Component{
	constructor(props, context) {
		super(props, context);
		this.state={hidden : false}
		this._onClick = this._onClick.bind(this);
	}
	_onClick(evt){
		this.setState({hidden : true})
	}

	render() {
		
			if(this.props.product.name !== undefined){
				return (

					<div >
						<h4>command: {this.props.product.name}</h4>
						{this.props.product.form}
					</div>

				)
			}
			else {
				return(
					<div></div>
				)
			}
		
	}

}
function mapStateToProps(state){
	return {
		product : state.activeProduct
	}
}

export default connect(mapStateToProps)(ProductForm)