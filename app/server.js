'use strict';


// REQUIRE COMPONENT....
let path = require('path');
let express = require('express');
let app = express();
let bodyParser = require("body-parser");

// REQUIRE CONTROLLER....
let HomeController = require('./controllers/HomeController.js');

//MY DB DATABASE STORAGE
let DB = require("./models/Db.js")
DB.postgresDB(true);



//APP SET...
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '/')));

//APP IS WORKING ....
app.get('/', function(req, res) {
	HomeController.init(req,res) //init initial view
});
app.get('/loadReducerProducts',(req,res,db)=>{
	HomeController.getReducerProduct(req,res,DB) //ajax request to set reducer of product in redux
	
})
app.get('/loadReducerRequest',(req,res, db)=>{
	HomeController.getReducerRequest(req,res,DB) //ajax request to set reducer of request in redux
	

});
app.post('/addRequest',(req,res)=>{
	HomeController.addRequest(req,res,DB) //add request in bdd
})

app.listen(8080, function () {
  console.log(' app listening on port 8080!');
});