'use strict';

let HomeController = function(){}

HomeController.prototype.init=function(req,res){
	res.render('index.ejs');
}
HomeController.prototype.getReducerProduct=function(req,res, dbManager){
	dbManager.tables.product.findAll({
		attributes : ['id','name','form','thumbnail']
	}).then((products)=>{
		let data = []
		for(let product of products){
			data.push(product.dataValues)
			
		}
		
		res.send(data)
		res.end();
	})
	
}
HomeController.prototype.getReducerRequest=function(req,res, dbManager){
	dbManager.tables.request.findAll({
		attributes : ['id','name','value','product_id'],

	}).then((requests)=>{

		let data = []
		let dataProduct = []
		
		for(let re of requests){
			data.push(re.dataValues)
			
		}
	
		res.send(data)
		res.end();
	})
	
}
HomeController.prototype.addRequest=function(req,res, dbManager){
	let body = req.body;
	let data = null
	
	if(body.productType === 'Plane tickets' && body.departure!=="" && body.return!==""){
		data={}
		data.name = body.product_name.replace(/(<([^>]+)>)/ig,"")
		data.value =[
			{
				// describe will show label when you show a save request
				describe:['Departure : ', 'Return : '],
				value : [body.departure.replace(/(<([^>]+)>)/ig,""), body.return.replace(/(<([^>]+)>)/ig,"") ]
			}
		]
		data.product_id = Number(body.product_id.replace(/(<([^>]+)>)/ig,""))

	}
	if(body.productType === 'Madelaine' && body.nbMadelaine!==''){
		data={}
		data.name = body.product_name.replace(/(<([^>]+)>)/ig,"")
		if(body.checkBoxChoco == 'true'){
			data.value =[
				{
					// describe will show label when you show a save request
					describe:['Number : ', 'choclate : '],
					value : [body.nbMadelaine.replace(/(<([^>]+)>)/ig,""), 'yes']
				}
			]
		}
		else{
			data.value =[
				{
					// describe will show label when you show a save request
					describe:['Number : ', 'choclate : '],
					value : [body.nbMadelaine.replace(/(<([^>]+)>)/ig,""), 'no']
				}
			]
		}
		
		data.product_id = Number(body.product_id.replace(/(<([^>]+)>)/ig,""))

	}
	if(body.productType === 'HivyTshirt' && body.checkboxSex!=="" && body.color !=="" && body.checkboxSize!==""  ){
		data={}
		product_id : 1
		data.name = body.product_name.replace(/(<([^>]+)>)/ig,"")
		if(body.checkboxSex !== undefined){
			data.value = [
			// describe will show label when you show a save request
				{describe : ['Gender : ','Size : ', 'Color : '], value : [body.checkboxSex.replace(/(<([^>]+)>)/ig,""), body.checkboxSize.replace(/(<([^>]+)>)/ig,""), body.color.replace(/(<([^>]+)>)/ig,"")]}
			]
		}
		
		
		data.product_id = Number(body.product_id.replace(/(<([^>]+)>)/ig,""))


	}

	if(data === null || data.name === '' || data.value===""|| data.product_id === ''){
		res.redirect('/')
		res.end()
		return
		
	}

	dbManager.tables.request.sync({force: false}).then(function () {
		dbManager.tables.request.create({
			name : data.name,
			value : data.value,
			product_id : data.product_id

		})
		res.redirect('/')
		res.end()
	})
}

module.exports = new HomeController();





