#!/bin/sh

echo "Install database...."
echo "Choose your host...."

read DBHOST

echo "Your dbhost is $DBHOST"
echo "Choose Name for your DATABASE ..."

read DBNAME

echo "Your dbname will call $DBNAME"
echo "Installing in postgreSql ..."


psql=$(cat <<EOF
dropdb $DBNAME --if-exists;
createdb $DBNAME
EOF
)
createTable=$(cat <<EOF

CREATE TABLE products (
    code        char(5) CONSTRAINT firstkey PRIMARY KEY,
    name       varchar(40) NOT NULL,
    form         TEXT
);
EOF
)
echo $psql | sudo -i -u postgres

echo "Your db $DBNAME is installed"
echo "Do you want install HivyLite table ? (y/n)"

read TABLE_BOOL

if echo "$TABLE_BOOL" | grep -iq "^y";then
	echo 'Installing table ...'
	echo $createTable | psql -h $DBHOST -U postgres -d $DBNAME; 
	echo 'Table was installed.'
	


else
	echo "No..."

fi
echo "Database $DBNAME was installed in $DBHOST."
echo 'Enjoy your dev.'