HivyLite
===================

Hi HivyLite is a litle form request build with nodejs react+redux and sequelize(postgresql)

How To Install
--------------

- First you need to clone this repo you can download zip or use

- After you need to install you local database you can use the sh script in `app/database/install.sh`use

> cd app/database; sh install.sh

> -> Install database //script launching ...

> -> choose your host .... // write your host

> <- localhost //my host for this db is now localhost

> -> choose Name For your DATABSE ... // write your db name

> <- hivylite

> -> install process .... 

> its possible script ask your pass for root right just give it and install continue

> -> do you want install hivyLite table ? (y/n) // write n case we have migration in node server

- then go in `app/models/Db.js` and set db if you dont name your db 'hivylite' e;g newdb
								


- this.sequelize = new this.postgres('newdb', 'postgres', 'postgres',{

	host : 'localhost',

	dialect:'postgres',

	logging: false
 });

- ok now db is ready go to install dependencies  do in HivyLite

> npm install
> npm install --only=dev -g

- after you can use webpack for dev or for create dist  so in HivyLite

> webpack 
> or
> webpack --watch //if you want dev

- then go at dist folder and launch server

> cd dist; node server.js

Use
--------------

- type `/*` for show all request and all products

type your request and form will show if your product's request is available 

- for do a custom request type `/*` select your product and erase `/*` type ypur request name instead
