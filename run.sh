#!/bin/bash

npm install

mkdir data

echo 'mongod --nojournal --dbpath=data' > mongod-start

chmod a+x mongod-start

sudo apt-get install mongodb

./mongod-start

node db_init.js&

mongo rtr&
echo "server is running on localhost:3000"
echo "if you want to register a new user, uncomment the 'register' div in the ./views/index.hbs file"

node db_init.js 
# ./bin/www
